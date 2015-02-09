function setBG() {
    
    switch(Math.floor(Math.random() * 6) + 1) { //generate a number between 0&9
        case 1:
            document.body.style.background = "url('../bg/BG1.png')";
            break;
        case 2:
            document.body.style.background = "url('../bg/BG2.png')";
            break;
        case 3:
            document.body.style.background = "url('../bg/BG3.png')";
            break;
        case 4:
            document.body.style.background = "url('../bg/BG4.png')";
            break;
        case 5:
            document.body.style.background = "url('../bg/BG4.png')";
            break;
        default:
            document.body.style.background = "url('../bg/BG0.jpg')";
            break;
    }
}

function validateEmail() {
    var re = /\S+@\S+\.\S+/; //copied from stackoverflow
    var val = document.forms["emailValidate"]["emailName"].value;
    if(val == null || "") {
        alert("Invalid submission");
        return false;
    }
    else if(re.test(val) == true) {
        alert("Thank you!");
    }
    else {
        alert("Invalid submission");
    } 
}