// Simple XOR-based encryption and decryption
function xorEncryptDecrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function encrypt() {
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;
    
    if (key === "") {
        alert("Input Password");
        return;
    }

    var encryptedText = xorEncryptDecrypt(text, key);
    var encoded = btoa(encryptedText);
    document.getElementById("result").innerText = "Encrypted Text: " + encoded;
}

function decrypt() {
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;

    if (key === "") {
        alert("Input Password");
        return;
    }

    try {
        var decoded = atob(text);
        var decryptedText = xorEncryptDecrypt(decoded, key);
        if (decryptedText.includes('�')) {
            document.getElementById("result").innerText = "Decrypted Text: You're an idiot";
        } else {
            document.getElementById("result").innerText = "Decrypted Text: " + decryptedText;
        }
    } catch (error) {
        alert("Invalid Base64 format");
    }
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
    document.getElementById("result").innerText = "";
}

function copyText() {
    var decryptedText = document.getElementById("result").innerText;
    if (!decryptedText || decryptedText === "Decrypted Text: You're an idiot") {
        alert("No valid text to copy");
        return;
    }

    // Create a temporary textarea to copy the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = decryptedText;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("Decrypted text copied to clipboard");
}
