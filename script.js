function encrypt() {
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;
    
    if (key === "1456") {
        var encoded = btoa(text);
        document.getElementById("result").innerText = "Encrypted Text: " + encoded;
    } else if (key === "") {
        alert("Input Password");
    } else {
        alert("Invalid Password");
    }
}

function decrypt() {
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;

    if (key === "1456") {
        try {
            var decoded = atob(text);
            document.getElementById("result").innerText = "Decrypted Text: " + decoded;
        } catch (error) {
            alert("Invalid Base64 format");
        }
    } else if (key === "") {
        alert("Input Password");
    } else {
        alert("Invalid Password");
    }
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
    document.getElementById("result").innerText = "";
}
