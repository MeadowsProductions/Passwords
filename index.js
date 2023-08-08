const lengthElement = document.querySelector(".length");
const settings = document.querySelectorAll(".settings div");
const submitBtn = document.querySelector(".create button");

const result = document.querySelector(".result");

settings.forEach(element => element.addEventListener("click", () => {
    element.classList.toggle("selected");
}))

submitBtn.addEventListener("click", () => {
    generate();
})

result.addEventListener("click", () => {
    copy(result.innerText);
})

function generate() {
    let nodupes = false;
    let length = parseInt(lengthElement.value);
    let charset = "abcdefghijklmopqrstuvwxyz";
    let pass = "";
    if(isNaN(parseInt(length))) {length = 8; lengthElement.value = 8;}
    if(length < 8) {length = 8; lengthElement.value = 8;};
    if(length > 50) {length = 50; lengthElement.value = 50;}; 

    settings[0].classList.contains("selected") && (charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    settings[1].classList.contains("selected") && (charset += "0123456789");
    settings[2].classList.contains("selected") && (charset += "!@#$%^&*()_+-=;:[]{}");
    settings[3].classList.contains("selected") && (charset += "¡¢£¤¥¦§¨©ª«¬­®¯°±²³µ¶´·¸¹º»");
    settings[4].classList.contains("selected") && (nodupes = true);
    settings[5].classList.contains("selected") && (charset += "   "); // 4 spaces to have a bigger chance.

    for(i = 0; i < length; i++) {
        let char = charset.charAt(Math.floor(Math.random() * charset.length));
        pass += char;
    }

    result.innerText = pass;
}

function copy (text) { 
    navigator.clipboard.writeText(text);
    result.innerText = "Copied!";
    setTimeout(() => {
        result.innerText = text;
    }, 1500)
}