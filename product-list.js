var display = getQueryString("display");

var container = document.getElementById("product-list");
var displayList = document.getElementById("display-list");
var displayThumbnails = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

function onDataLoad (e)
{
  alert(e);
  console.log(e);
}

var items = [];
items.push({id: 1, name: "Product 1", price: 60, description: "some description", image: "images/product1.jpg"});
items.push({id: 2, name: "Product 2", price: 460, description: "some description", image: "images/product2.jpg"});
items.push({id: 3, name: "Product 3", price: 660, description: "some description", image: "images/product3.jpg"});
items.push({id: 4, name: "Product 4", price: 60, description: "some description", image: "images/product4.jpg"});
items.push({id: 5, name: "Product 5", price: 460, description: "some description", image: "images/product5.jpg"});
items.push({id: 6, name: "Product 6", price: 660, description: "some description", image: "images/product6.jpg"});

//default product display
display == "list"? renderList() : renderThumbnails();

displayList.addEventListener("click", function()
{
  renderList();
});

displayThumbnails.addEventListener("click", function()
{
  renderThumbnails();
});


function renderList ()
{
  container.className = "";
  container.innerHTML = null;

  for (var i=0; i<items.length; i++)
  {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + items[i].id;
    a.innerText = items [i].name;
    item.appendChild(a);
    container.appendChild(item);
  }
}

function renderThumbnails ()
{
  container.className = "products-thumbnail";
  container.innerHTML = null;
  for (var i=0; i<items.length ;i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + items[i].id;
    var img = document.createElement("img");
    img.src = items[i].image;
    var span = document.createElement("span");
    span.innerText = items[i].name;
    a.appendChild(img);
    a.appendChild(span);
    item.appendChild(a);
    container.appendChild(item);
  }
}

function getQueryString (field, url)
{
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
