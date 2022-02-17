function myFunction(y) {
    y.classList.toggle("change");
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myTopnav").style.fontSize = "300px";
//   } else {
//     document.getElementById("myTopnav").style.color = "white";
//
//   }
// }


