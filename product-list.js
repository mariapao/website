$(document).ready(function()
{
  $containerElement = $("#product-list")
});



var display = getQueryString("display");

var containerElement = document.getElementById("product-list");
var searchElement = document.getElementById("product-search");
var displayListElement = document.getElementById("display-list");
var displayThumbnailsElement = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
//xhr.send();

//var items = [];
var items = [
  {"id": 1, "name": "DC media blitz snowboard 150CM", "price": 460, "description": "Make sure to have the cameras rolling because the DC Media Blitz Snowboard is back for another season of mountainous destruction!", "image": "images/product1.jpg"},
  {"id": 2, "name": "DC tone snowboard 149CM", "price": 620, "description": "A stiff flex paired with a traditional camber profile and lightweight core provides an extra poppy and responsive platform for pro-level progression. ", "image": "images/product2.jpg"},
  {"id": 3, "name": "DC omega snowboard 157CM", "price": 770, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product3.jpg"},
  {"id": 4, "name": "BURTON Lift snowboard 160CM", "price": 730, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product4.jpg"},
  {"id": 5, "name": "BURTON Chile snowboard 149CM", "price": 710, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product5.jpg"},
  {"id": 6, "name": "DC Fick snowboard 156CM", "price": 450, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product6.jpg"},
  {"id": 7, "name": "DC PBJ SNOWBOARD 149CM", "price": 880, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product7.jpg"},
  {"id": 8, "name": "DC MLF SNOWBOARD 157CM", "price": 560, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product8.jpg"},
  {"id": 9, "name": "DC AlPHA  snowboard 156CM", "price": 340, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product9.jpg"},
  {"id": 10, "name": "DC superNova snowboard 155CM", "price": 560, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product10.jpg"},
  {"id": 11, "name": "DC Nova snowboard 149CM", "price": 600, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product11.jpg"},
  {"id": 12, "name": "DC tripleStrike snowboard 159CM", "price": 640, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product12.jpg"},
  {"id": 13, "name": "DC Boom snowboard 161CM", "price": 740, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product13.jpg"},
  {"id": 14, "name": "DC bravo snowboard 148CM", "price": 835, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product14.jpg"},
  {"id": 15, "name": "DC supernatant snowboard 151CM", "price": 428, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "images/product15.jpg"}
];
render(items);

function onDataLoad (e)
{
  if (e.target.status == 200)
  {

    items = JSON.parse(e.target.response);
    render(items);
  }
}

function search (text)
{
  var results = [];
  for (var i=0; i<items.length; i++)
  {
    if(items[i].name.toLowerCase().indexOf(text.trim().toLowerCase()) >= 0
    || items [i].price == text)
    {
      results.push(items[i]);
    }
  }
  render(results);
}

$("#product-search").on("keyup", function (e) {
  search($(this).val());
})

displayListElement.addEventListener("click", function()
{
  renderList(items);
});

displayThumbnailsElement.addEventListener("click", function()
{
  renderThumbnails(items);
});

function render (list)
{
  display == "list"? renderList(list) : renderThumbnails (list);
}

function renderList (list)
{
  $("#product-list").html(null);
  $("#product-list").attr("class", "");
  for (var i=0; i<list.length; i++)
  {
    $("#product-list").append("<li><a href='product.html?id=" + list[i].id + "'>" + list[i].name + "</a></li>");
  }
}

function renderThumbnails (list)
{
  $("#product-list").html(null);
  $("#product-list").attr("class", "products-thumbnail");
  for (var i=0; i<list.length; i++)
  {
    $("#product-list").append("<li><a href='product.html?id=" + list[i].id + "'><img src='" + list[i].image + "'><span>" + list[i].name + "</span></a></li>");
  }
}

function getQueryString (field, url)
{
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
