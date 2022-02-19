function myFunction(y) {
    y.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 && document.body.scrollTop < 2000 || document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 2000) {
        var element1 = document.getElementsByClassName("menu_button_regular");
        for (var i = 0; i < element1.length; i++) {
            element1[i].className = "menu_button_regular_scroll";
        }
        document.getElementById('service').classList.add('dropbtn')
        document.getElementById('dropdowncont').className = "drop_down_content_scroll"
    } else {
        var element2 = document.getElementsByClassName("menu_button_regular_scroll");
        for (var j = 0; j < element2.length; j++) {
            element2[j].className = "menu_button_regular";
        }
        document.getElementById('dropdowncont').className = "drop_down_content"

    }
}

function div_opener() {
    document.getElementById('change').style.color = 'red'

}

function Pychanger() {

    document.getElementById('div_to_change').innerHTML = 'שפת פייתון היא שפת התכנות הפופולרית ביותר היום בקרב מתכנתים! רוצים להצטרף לקהילה? בואו ללמוד איתנו<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png" style="width: 60%">';
    document.getElementById('div_to_change').style.textAlign = 'center';
    document.getElementById('div_to_change').style.fontSize = '30px';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = '#51A2FC51';
    document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(-30px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'
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
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = 'white';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.transform = 'translateX(-30px)'
    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'

}

function HTMLchanger() {
    document.getElementById('div_to_change').innerHTML = 'תמיד רציתם ללמוד פיתוח ועיצוב אתרי אינטרנט? עכשיו זה הזמן! קורס אינטרנטי חד ומדוייק! צרו קשר<br><br><br><img src="https://r6solution.com/wp-content/uploads/2021/03/1_lJ32Bl-lHWmNMUSiSq17gQ.png" style="width: 40%">';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    document.getElementById('HTMLbtn').style.backgroundColor = '#51A2FC51';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('HTMLbtn').style.transform = 'translateX(-30px)'
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'

}

function JSchanger() {
    document.getElementById('div_to_change').innerHTML = 'קחו את הרמה שלכם בפיתוח ווב ובניית אתרים ותעלו אותה רמה אחת למעלה, בעזרת השפה החמה ביותר בשוק<br><br><br><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" alt="javascript picture" style="width: 40%">';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = '#51A2FC51';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(-30px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'

}

function Discretchanger() {
    document.getElementById('div_to_change').innerHTML = 'רוצים להבין לעומק את יסודות המתמטיקה? לקבל ציון גבוה כדי להרים את הממוצע? צריכים תגבור? זה הקורס בשבילכם' +
        '<br><br>תחשיב הפסוקים' +
        '<br>תורת הקבוצות' +
        '<br>פונקציות' +
        '<br>עוצמות' +
        '<br>יחסים' +
        '<br>קומבינטוריקה' +
        '<br>תורת הגרפים' +
        '<br>תרגול מבחנים';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = '#51A2FC51';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';

    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(-30px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'

}

function Linearchanger() {
    document.getElementById('div_to_change').innerHTML = 'רוצים להבין לעומק את אלגברה לינארית? לקבל ציון גבוה בקורס החשוב הזה? צריכים תגבור? זה הקורס בשבילכם' +
        '<br><br>מערכת משוואות לינאריות' +
        '<br>תורת המטריצות ודטרמיננטות' +
        '<br>תלות לינארית' +
        '<br>בסיסים ומימד' +
        '<br>העתקות ומטריצת מעבר' +
        '<br>ניצבות, אורתוגונליות ואורתונורמליות' +
        '<br>תרגול מבחנים';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = 'white';
    document.getElementById('Linearbtn').style.backgroundColor = '#51A2FC51';

    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(-30px)'
    document.getElementById('Infibtn').style.transform = 'translateX(0px)'
}

function Infichanger() {
    document.getElementById('div_to_change').innerHTML = 'רוצים להבין לעומק חשבון אינפיניטיסמלי וחדוו"א? לקבל ציון גבוה בקורס החשוב הזה? צריכים תגבור? זה הקורס בשבילכם' +
        '<br><br>מבוא מתמטי' +
        '<br>סדרות וגבולות של סדרות' +
        '<br>פונקציות וגבולות של פונקציות' +
        '<br>רציפות' +
        '<br>פונקציות לוגריתמיות' +
        '<br>חקירת פונקציות' +
        '<br>תרגול מבחנים';
    document.getElementById('div_to_change').style.fontSize = '40px'
    document.getElementById('div_to_change').style.textAlign = 'center';

    document.getElementById('HTMLbtn').style.backgroundColor = 'white';
    document.getElementById('javabtn').style.backgroundColor = 'white';
    document.getElementById('pythonbtn').style.backgroundColor = 'white';
    document.getElementById('JSbtn').style.backgroundColor = 'white';
    document.getElementById('Discretbtn').style.backgroundColor = 'white';
    document.getElementById('Linearbtn').style.backgroundColor = 'white';
    document.getElementById('Infibtn').style.backgroundColor = '#51A2FC51';

    document.getElementById('HTMLbtn').style.transform = 'translateX(0px)'
    document.getElementById('javabtn').style.transform = 'translateX(0px)'
    document.getElementById('pythonbtn').style.transform = 'translateX(0px)'
    document.getElementById('JSbtn').style.transform = 'translateX(0px)'
    document.getElementById('Discretbtn').style.transform = 'translateX(0px)'
    document.getElementById('Linearbtn').style.transform = 'translateX(0px)'
    document.getElementById('Infibtn').style.transform = 'translateX(-30px)'
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






