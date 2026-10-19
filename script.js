const loadButton = document.getElementById("loadButton");
const messages = document.getElementById("messages");
const summary = document.getElementById("summmary");
const cards = document.getElementById("cards");

const xml = new XMLHttpRequest();

let consoles;

xml.addEventListener("load", () => {
    if (xml.status === 200) {
        try {
            consoles = JSON.parse(xml.responseText).consoles;
            console.log(consoles);
        } catch {
            messages.textContent = "Consoles call did not return valid JSON.";
        }
    } else {
        messages.textContent = "Consoles call did not return a 200 OK.";
    }
});

xml.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

loadButton.addEventListener("click", () => {
    xml.send();
});
