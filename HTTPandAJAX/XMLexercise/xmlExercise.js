/* XML

Use Geolocation API service

You can find the documentation for this API at
https://www.geoplugin.com/webservices/xml.

Check out the documentation to see how to use this API.

Create a function which is sending request via AJAX and getting data in XML format.

When data is received from the server, extract country name which is detected based on
IP address, and show it on the screen.

Extra:
There is a button and input field on HTML page!

Each time user clicks the button, function for getting geolocation data is invoked and
new ip address written in input field is used when sending request. */

const countryName = document.getElementById("countryName");
const checkButton = document.getElementById("submitButton");
const url = "http://www.geoplugin.net/xml.gp?ip";
const ipInput = document.getElementById("ipAdress");

/*Function for sending request XML format*/

function sendRequestToServerAndSetOutput() {
    let localURL = url + ipInput.value;
    let xml = new XMLHttpRequest();
    xml.open("GET", localURL);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            let xmlText = xml.responseXML;
            let countryName = xmlText.querySelector("geoplugin_timezone").textContent.split("/")[1];
            countryNameOutput.textContent = countryName;
        }
    };
}

/*Events*/

checkButton.addEventListener("click", sendRequestToServerAndSetOutput);

