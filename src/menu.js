export default function loadMenu() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const menuList = document.createElement("ul");

    const items = [
        { name: "Pizza", price: "$10" },
        { name: "Pasta", price: "$12" },
        { name: "Salad", price: "$8" },
    ];

    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price}`;
        menuList.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList);
    console.log("Menu page loaded");
}
