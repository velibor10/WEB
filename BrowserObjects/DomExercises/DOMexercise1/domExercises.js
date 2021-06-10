/* 1. Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it. */

function setBgColor () {
    let secondList = document.querySelector("ul:nth-child(2)");
    secondList.className = "bg-color";
}

setBgColor();


/* 2. Create a second function that, when triggered, selects all <li> elements on the page.
The function also sets a class that sets some bg color to every <li> element. */

function selectLi () {
    let lists = document.querySelectorAll("ul li"); 
        lists.forEach(function(string) {
          string.classList = "bg-li-color";  
        });
}

selectLi();


/* 3. Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase. */

function thirdList () {
    let third = document.querySelectorAll("ul:nth-child(3) li");
    third.forEach(function(string) {
        string.className = "third-list";
    })
}

thirdList();

/* Traversing
4. Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its
background color. */

function addingClass() {
    let addClass = document.querySelector("div").nextElementSibling.firstElementChild.firstElementChild;
    addClass.className = "active";
}

addingClass();

 function removingClass() {
    let removeClass = document.getElementsByClassName ("active");
    removeClass[0].classList.remove("active");
}

removingClass();

function applyingClass() {
    let applyingClass = document.querySelector("div").firstElementChild.firstElementChild;
    applyingClass.className = "active";
}

applyingClass();

