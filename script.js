const loadButton = document.getElementById("loadButton");
const messages = document.getElementById("messages");
const summary = document.getElementById("summary");
const cards = document.getElementById("cards");

const xml = new XMLHttpRequest();

let consoles;

xml.addEventListener("load", () => {
    if (xml.status === 200) {
        try {
            consoles = JSON.parse(xml.responseText).consoles;
        } catch {
            messages.textContent = "Consoles call did not return valid JSON.";
        }

        cards.innerHTML = "";

        for (let c of consoles) {
            const card = document.createElement("div");

            const img = document.createElement("img");
            img.src = c.image;
            img.alt = `${c.name} Image`;

            const header = document.createElement("h2");
            header.textContent = c.name;

            const details = document.createElement("p");
            details.textContent = `${c.manufacturer} · ${c.year}`;

            card.append(img, header, details);

            cards.append(card);
        }

        let oldestConsole;
        let newestConsole;

        for (let c of consoles) {
            if (oldestConsole === undefined) {
                oldestConsole = c;
            } else if (oldestConsole.year > c.year) {
                oldestConsole = c;
            }

            if (newestConsole === undefined) {
                newestConsole = c;
            } else if (newestConsole.year < c.year) {
                newestConsole = c;
            }
        }

        summary.innerHTML = `<strong>${consoles.length} Consoles</strong> · Oldest: ${oldestConsole.name} (${oldestConsole.year}) · Newest: ${newestConsole.name} (${newestConsole.year})`;
    } else {
        messages.textContent = "Consoles call did not return a 200 OK.";
    }
});

xml.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

loadButton.addEventListener("click", () => {
    xml.send();
});
