var display = getQueryString("display");

var container = document.getElementById("product-list");
var search = document.getElementById("product-search");
var displayList = document.getElementById("display-list");
var displayThumbnails = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

var items = [];
function onDataLoad (e)
{
  if (e.target.status == 200)
  {

    items = JSON.parse(e.target.response);

    //default product display
    display == "list"? renderList() : renderThumbnails();
  }
}

function search ()
{
  var results = [];
  for (var i=0; i<items.length; i++)
  {
    if(items[i].name == text)
    {
      results.push(items[i]);
    }
  }
  render(results);
}

searcg.addEventListener("keyup", function(e)
{
  search(e.target.value);
  console.log(e);
});

displayList.addEventListener("click", function()
{
  renderList();
});

displayThumbnails.addEventListener("click", function()
{
  renderThumbnails();
});

function render ()
{
  display == "list"? renderList(list) : renderThumbnails (list);
}
function renderList (list)
{
  container.className = "";
  container.innerHTML = null;

  for (var i=0; i<list.length; i++)
  {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + list[i].id;
    a.innerText = list [i].name;
    item.appendChild(a);
    container.appendChild(list);
  }
}

function renderThumbnails (list)
{
  container.className = "products-thumbnail";
  container.innerHTML = null;
  for (var i=0; i<list.length ;i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + list[i].id;
    var img = document.createElement("img");
    img.src = list[i].image;
    var span = document.createElement("span");
    span.innerText = list[i].name;
    a.appendChild(img);
    a.appendChild(span);
    item.appendChild(a);
    container.appendChild(list);
  }
}

function getQueryString (field, url)
{
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
