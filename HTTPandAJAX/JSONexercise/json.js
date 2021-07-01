
const setImageButton = document.getElementById("setImageButton");
const images = document.getElementById("images");

function viewDogImage() {
    
    const server = new XMLHttpRequest();
    server.open("GET", "https://dog.ceo/api/breeds/image/random");
    server.send();
    server.onreadystatechange = function() {
        if(server.readyState === 4 && server.status === 200) {
            let dogs = JSON.parse(server.responseText).message;
            let img = document.createElement("img");
            img.setAttribute("id", "serverImg");
            img.setAttribute("src", dogs);
            images.appendChild(img);
        }   
    }
}


// Events

setImageButton.addEventListener("click", viewDogImage);