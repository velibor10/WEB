/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on
screen using alert.

Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with
text passed as the function argument. */

function alerting() {
    let textAlert = document.querySelector("li:nth-child(2)").textContent;
    console.log(textAlert);
    alert(textAlert);
}

alerting();

function textReplacing (text) {
    let newText = document.querySelector("ul").lastElementChild;
    newText.textContent = text;
}

textReplacing("In vino is vertas"); 