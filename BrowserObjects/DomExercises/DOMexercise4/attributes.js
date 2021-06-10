function validateForm () {
    let formInput = document.getElementsByTagName("input");
    for (let i = 0; i < formInput.length; i++) {
        if(formInput[i].required && formInput[i].value === "") {
            formInput[i].className = "red-border";
        }
    }
}

validateForm();
