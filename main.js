let navnav = document.getElementById("navnav");
let navbar = document.getElementById("navbar");
let navinav = document.getElementById("navinav")

let turnGray = function() {  
    document.getElementById("navnav1").style.backgroundColor = 'gray';
    document.getElementById("navnav2").style.backgroundColor = 'gray';
    document.getElementById("navnav3").style.backgroundColor = 'gray';
}

let undoGray = function() {
    document.getElementById("navnav1").style.backgroundColor = '';
    document.getElementById("navnav2").style.backgroundColor = '';
    document.getElementById("navnav3").style.backgroundColor = '';
}

let turnGray2 = function() {  
    document.getElementById("navnav4").style.backgroundColor = 'gray';
    document.getElementById("navnav5").style.backgroundColor = 'gray';
    document.getElementById("navnav6").style.backgroundColor = 'gray';
}

let undoGray2 = function() {
    document.getElementById("navnav4").style.backgroundColor = '';
    document.getElementById("navnav5").style.backgroundColor = '';
    document.getElementById("navnav6").style.backgroundColor = '';
}
let visible = function() {
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
}

let invisible = function() {
    navbar.style.opacity = "";
    navbar.style.visibility = "";
}

navnav.addEventListener("mouseover", turnGray);
navnav.addEventListener("mouseout", undoGray);
navinav.addEventListener("mouseover", turnGray2);
navinav.addEventListener("mouseout", undoGray2);
navnav.addEventListener("click", visible);
navinav.addEventListener("click", invisible);