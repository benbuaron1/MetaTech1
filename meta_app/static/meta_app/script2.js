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


function div_opener() {
  document.getElementById('change').style.color = 'red'

}

function Pychanger() {

  document.getElementById('div_to_change').innerHTML = 'שפת פייתון היא שפת התכנות הפופולרית ביותר היום בקרב מתכנתים! רוצים להצטרף לקהילה? בואו ללמוד איתנו<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png" style="width: 60%">';
  document.getElementById('div_to_change').style.textAlign = 'center';
  // document.getElementById('div_to_change').style.backgroundColor= '#51A2FC51';
document.getElementById('div_to_change').style.fontSize = '30px';
  document.getElementById('javabtn').style.backgroundColor = 'white';
  document.getElementById('pythonbtn').style.backgroundColor = '#51A2FC51';
  document.getElementById('HTMLbtn').style.backgroundColor = 'white';
  document.getElementById('javabtn').style.transform = 'translateX(0px)'
  document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
  document.getElementById('pythonbtn').style.transform = 'translateX(-30px)'
  // document.getElementById('pythonbtn').style.transform = 'translateX(-20px)'
}


function Javachanger() {
  document.getElementById('div_to_change').innerHTML = 'בואו ללמוד את השפה של הגדולים! קורס Java איכותי ומעמיק, כניסה לנוח לעולם התכנות! צרו קשר<br><br><br><img src="https://banner2.cleanpng.com/20180628/stv/kisspng-java-programming-language-computer-programming-pro-language-contact-5b356e6a914e08.2685932315302283305952.jpg" style="width: 40%">';
  document.getElementById('div_to_change').style.fontSize = '40px'
  document.getElementById('div_to_change').style.textAlign = 'center';
  // document.getElementById('div_to_change').style.backgroundColor= '#51A2FC51';
  // document.getElementById('div_to_change').style.padding= '40px';
  document.getElementById('javabtn').style.backgroundColor = '#51A2FC51';
  document.getElementById('HTMLbtn').style.backgroundColor = 'white';
  document.getElementById('pythonbtn').style.backgroundColor = 'white';
  document.getElementById('javabtn').style.transform = 'translateX(-30px)'
  document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
  document.getElementById('pythonbtn').style.transform = 'translateX(0px)'

}
function HTMLchanger() {
  document.getElementById('div_to_change').innerHTML = 'תמיד רציתם ללמוד פיתוח ועיצוב אתרי אינטרנט? עכשיו זה הזמן! קורס אינטרנטי חד ומדוייק! צרו קשר<br><br><br><img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png" style="width: 40%">';
  document.getElementById('div_to_change').style.fontSize = '40px'
  document.getElementById('div_to_change').style.textAlign = 'center';

  document.getElementById('HTMLbtn').style.backgroundColor = '#51A2FC51';
  document.getElementById('javabtn').style.backgroundColor = 'white';
  document.getElementById('pythonbtn').style.backgroundColor = 'white';
  document.getElementById('HTMLbtn').style.transform = 'translateX(-30px)'
  document.getElementById('javabtn').style.transform = 'translateX(0px)'
  document.getElementById('pythonbtn').style.transform = 'translateX(0px)'

}






