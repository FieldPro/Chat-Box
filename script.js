words = {
    "Hello" : "Hi",
    "How are you?" : "Good. How are you?",
    "Fine": "Awesome!",
    "Good": "Great!",
    "Ok" : ":)",
    "Okay" : ":)",
    "Bye" : "Do have a nice day. Bye!",
};

function speak() {
    var user = document.getElementById("userWord").value;
    
    document.getElementById("userWord").value = "";
    document.getElementById("box").innerHTML += user+"<br>";
    
    if (user in words) {
        document.getElementById("box").innerHTML += words[user]+"<br>";
    } 
    else {
        document.getElementById("box").innerHTML += "Try again <br>";
    }
};