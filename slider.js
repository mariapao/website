var slider = document.getElementById("slider");
var img = [];
img.push("images/homestead-dawn-background.jpg");
img.push("images/dao-bg.jpg");

var i= 0;

function PreviousImage ()
{
  slider.style.backgroundImage = "url('" + img [i] + "')";
  i = (i <= 0 ? img.length - 1 : i - 1);
}
function NextImage ()
{
  slider.style.backgroundImage = "url('" + img [i] + "')";
  i = (i < img.length - 1 ? i + 1: 0);
}

var t = setInterval (NextImage, 5000);
slider.addEventListener("click", function ()
{
  clearInterval(t);
});
