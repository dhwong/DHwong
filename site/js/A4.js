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

function validateEmail(val) {
    var re = /\S+@\S+\.\S+/; //copied from stackoverflow
    if(val.value.match(re)) {
        alert("Thank you!");
        return true;
    }
    else {
        alert("Invalid submission");
        return false;
    } 
}

function getTitle() {
    alert("Title: "+document.title);
}