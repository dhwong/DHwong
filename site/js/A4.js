function setBG() {
    var rand = Math.ceil(Math.random() * 6); //generate a number between 1&6
    if (rand === 1) {
        document.body.style.background = "black url('bg/BG1.png')";
    }
    else if (rand === 2) {        
        document.body.style.background = "black url('bg/BG2.png')";
    }
    else if (rand === 3) {
        document.body.style.background = "black url('bg/BG3.png')";
    }
    else if (rand === 4) {
        document.body.style.background = "black url('bg/BG4.png')";
    }
    else if (rand === 5) {
        document.body.style.background = "black url('bg/BG4.png')";
    }
    else {
        document.body.style.background = "black url('bg/BG0.jpg')";
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