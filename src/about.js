export default function loadAbout() {
    const heading = document.createElement("h1");
    heading.textContent = "About us";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem Ipsum";

    const content = document.getElementById("content");
    content.appendChild(heading);
    content.appendChild(paragraph);
    console.log("About page loaded");
}
