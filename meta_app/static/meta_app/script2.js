const urljava= "{% static 'meta_app/javaicon.png' %}"

function myFunction(y) {
    y.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 900 && document.body.scrollTop < 1500 || document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1500) {
//         var element1 = document.getElementsByClassName("menu_button_regular");
//         for (var i = 0; i < element1.length; i++) {
//             element1[i].className = "menu_button_regular_scroll";
//         }
//         document.getElementById('service').classList.add('dropbtn')
//         document.getElementById('dropdowncont').className = "drop_down_content_scroll"
//         document.getElementById("menu_icon").style.width="36px"
//         document.getElementById("menu_icon").style.transform ="translateY(-5px)"
//     } else {
//         var element2 = document.getElementsByClassName("menu_button_regular_scroll");
//         for (var j = 0; j < element2.length; j++) {
//             element2[j].className = "menu_button_regular";
//         }
//         document.getElementById('dropdowncont').className = "drop_down_content"
//         document.getElementById("menu_icon").style.width="43px"
//         document.getElementById("menu_icon").style.transform ="translateY(5px)"
//
//     }
// }

function div_opener() {
    document.getElementById('change').style.color = 'red'

}

function Pychanger() {

    document.getElementById('div_to_change').innerHTML = 'שפת פייתון היא שפת התכנות הפופולרית ביותר היום בקרב מתכנתים! רוצים להצטרף לקהילה? בואו ללמוד איתנו<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png" style="width: 60%; display: flex; margin: auto">';
    document.getElementById('div_to_change').style.textAlign = 'center';
    document.getElementById('div_to_change').style.fontSize = '40px';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = '#51A2FC51';
    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(-10px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'
}


function Javachanger() {
    document.getElementById('div_to_change').innerHTML = 'בואו ללמוד את השפה של הגדולים! קורס Java איכותי ומעמיק, כניסה לנוח לעולם התכנות! צרו קשר<br><img src= "https://upload.wikimedia.org/wikipedia/commons/f/fc/Javalogo.png" style="width: 40%">';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';
    // document.getElementById('div_to_change').style.backgroundColor= '#51A2FC51';
    // document.getElementById('div_to_change').style.padding= '40px';
    // document.getElementById('javabtn').style.backgroundColor = '#51A2FC51';
    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = 'white';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.transform = 'translateY(-10px)'
    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'

}

function HTMLchanger() {
    document.getElementById('div_to_change').innerHTML = 'תמיד רציתם ללמוד פיתוח ועיצוב אתרי אינטרנט? עכשיו זה הזמן! קורס אינטרנטי חד ומדוייק! צרו קשר<br><img src="https://r6solution.com/wp-content/uploads/2021/03/1_lJ32Bl-lHWmNMUSiSq17gQ.png" style="width: 40%">';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    // document.getElementById('HTMLbtn').style.backgroundColor = '#51A2FC51';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('HTMLbtn').style.transform = 'translateY(-10px)'
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'

}

function JSchanger() {
    document.getElementById('div_to_change').innerHTML = 'קחו את הרמה שלכם בפיתוח ווב ובניית אתרים ותעלו אותה רמה אחת למעלה, בעזרת השפה החמה ביותר בשוק<br><br><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" alt="javascript picture" style="width: 30%">';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = '#51A2FC51';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(10px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'

}

function Discretchanger() {
    document.getElementById('div_to_change').innerHTML = 'רוצים להבין לעומק את יסודות המתמטיקה? לקבל ציון גבוה כדי להרים את הממוצע? צריכים תגבור? זה הקורס בשבילכם';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = '#51A2FC51';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';

    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(10px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'

}

function Linearchanger() {
    document.getElementById('div_to_change').innerHTML = 'תלמידי תיכון ואוהבים לתכנת? אנחנו הפתרון שלכם! בואו ללמוד לעומק את יסודות התכנות, תתכוננו לבגרות ולצבא בצורה המיטבית ביותר עם חניכה מלאה! דברו איתנו'
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = 'white';
    // document.getElementById('Linearbtn').style.backgroundColor = '#51A2FC51';

    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(10px)'
    document.getElementById('Infibtn').style.transform = 'translateY(0px)'
}

function Infichanger() {
    document.getElementById('div_to_change').innerHTML = 'רוצים להבין לעומק חשבון אינפיניטיסמלי וחדוו"א? לקבל ציון גבוה בקורס החשוב הזה? צריכים תגבור? זה הקורס בשבילכם';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    // document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    // document.getElementById('javabtn').style.backgroundColor = 'white';
    // document.getElementById('pythonbtn').style.backgroundColor = 'white';
    // document.getElementById('JSbtn').style.backgroundColor = 'white';
    // document.getElementById('Discretbtn').style.backgroundColor = 'white';
    // document.getElementById('Linearbtn').style.backgroundColor = 'white';
    // document.getElementById('Infibtn').style.backgroundColor = '#51A2FC51';

    document.getElementById('HTMLbtn').style.transform = 'translateY(0px)'
    document.getElementById('javabtn').style.transform = 'translateY(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateY(0px)'
    document.getElementById('JSbtn').style.transform = 'translateY(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateY(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateY(0px)'
    document.getElementById('Infibtn').style.transform = 'translateY(10px)'
}


// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myTeachersFunc() {
    document.getElementById('myBio').style.visibility = 'hidden';
    document.getElementById('myTeachers').style.visibility = 'visible';
    document.getElementById('myLessons').style.visibility = 'hidden';
}
function myLessonsFunc() {
    document.getElementById('myBio').style.visibility = 'hidden';
    document.getElementById('myTeachers').style.visibility = 'hidden';
    document.getElementById('myLessons').style.visibility = 'visible';
}

function myBioFunc() {
    document.getElementById('myBio').style.visibility = 'visible';
    document.getElementById('myTeachers').style.visibility = 'visible';
    document.getElementById('myLessons').style.visibility = 'visible';
}






