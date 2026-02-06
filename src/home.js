import pizza from "./pizza.jpg";

export default function loadHome() {
    const image = document.createElement("img");
    image.src = pizza;
    image.alt = "Delicious pizza";
    image.width = 300;

    const heading = document.createElement("h1");
    heading.textContent = "My restaurant page";

    const paragraph = document.createElement("p");
    paragraph.textContent = "The greatest restaurant of all time";

    const content = document.getElementById("content");
    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
    console.log("Home page loaded");
}
