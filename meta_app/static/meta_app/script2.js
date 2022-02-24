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

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 && document.body.scrollTop < 1500 || document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1500) {
        var element1 = document.getElementsByClassName("menu_button_regular");
        for (var i = 0; i < element1.length; i++) {
            element1[i].className = "menu_button_regular_scroll";
        }
        document.getElementById('service').classList.add('dropbtn')
        document.getElementById('dropdowncont').className = "drop_down_content_scroll"
        document.getElementById("menu_icon").style.width="36px"
        document.getElementById("menu_icon").style.transform ="translateY(-5px)"
    } else {
        var element2 = document.getElementsByClassName("menu_button_regular_scroll");
        for (var j = 0; j < element2.length; j++) {
            element2[j].className = "menu_button_regular";
        }
        document.getElementById('dropdowncont').className = "drop_down_content"
        document.getElementById("menu_icon").style.width="43px"
        document.getElementById("menu_icon").style.transform ="translateY(5px)"

    }
}

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
    document.getElementById('div_to_change').innerHTML = 'בואו ללמוד את השפה של הגדולים! קורס Java איכותי ומעמיק, כניסה לנוח לעולם התכנות! צרו קשר<br><img src= "data:image/png;base64,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" style="width: 40%">';
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






