let array = ["Home", "About Us", "Contact"];
let array1 = ["Email", "Mobile", "Fax"];


function createdrowDownSelect (array, div) {
    let label = document.createElement("label");
    let select = document.createElement("select");
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = array[i];
        select.appendChild(option);
    }

    let body = document.querySelector("body");
    let node = document.createElement(div);
    body.prepend(node);
    node.prepend(label);
    node.appendChild(select);
}

createdrowDownSelect(array1, "div");
createdrowDownSelect(array, "div");
