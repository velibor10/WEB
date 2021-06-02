(function helloAgain() {
    console.log("Hello again");
})();

(function () {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.vendor);
    console.log(window.navigator);
})();

(function isOnline () {
    if (window.navigator.onLine === true) {
        console.log("online");
    }
    else {
        console.log("offline");
    }
})();

(function () {
    console.log(window.screen.availWidth);
    console.log(window.screen.availHeight);
    console.log(window.screen.height);
    console.log(window.screen);
    console.log(document.documentElement.clientHeight);
})();

(function () {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.origin);
    console.log(window.location.pathname);
})();

/*
function reloadURL () {
    window.location.reload()
}
reloadURL(); */

 
/*
function redirect (page) {
    window.location.replace (page);
}
redirect("https://www.google.com/");*/

function storeData () {
    window.localStorage.setItem("name", "Velibor");
}
storeData();

function readData () {
    if (window.localStorage.getItem("name")) {
        console.log("There is no data");
    }
    else {
    console.log(window.localStorage.getItem("name"));
    }
}
readData();

function removeData () {
    window.localStorage.clear();
}
removeData();

// sessionStorage 

function storeLocalData () {
    window.sessionStorage.setItem("Surname", "Zdravkovic")
}
storeLocalData();

function getStoreLocalData () {
    console.log(window.sessionStorage.getItem("Surname"));
}
getStoreLocalData();

