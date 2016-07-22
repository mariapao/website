var id = getQueryString("id") - 1;
var productName = document.getElementById("product-name");
var productDescription = document.getElementById("product-desc");
var productImage = document.getElementById("product-img");
var productPrice = document.getElementById("product-price");
var productPriceOld = document.getElementById("product-price-old");

var items = [];
items.push({id: 1, name: "Product 1", price: 60, description: "some description", image: "images/product1.jpg"});
items.push({id: 2, name: "Product 2", price: 460, description: "some description", image: "images/product2.jpg"});
items.push({id: 3, name: "Product 3", price: 660, description: "some description", image: "images/product3.jpg"});

var item = items [id];
try
{
  productName.innerText = item.name;
  productDescription.innerText = item.description;
  productImage.src = item.image;
  productPrice.innerText = "$" + item.price;
}
catch (e)
{
  productName.innerText = "Product not found";
}

function getQueryString (field, url)
{
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
