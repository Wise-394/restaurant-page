import tonkatsu from "../assets/img/restaurant-bg.jpg";
import misoRamen from "../assets/img/miso-ramen.jpg";
import yakitori from "../assets/img/yakitori.jpg";
import tempuraUdon from "../assets/img/tempura-udon.jpg";
import gyoza from "../assets/img/gyoza.jpg";
import sashimi from "../assets/img/sashimi.jpg";

const menuList = [
  {
    title: "Tonkatsu",
    description: "Authentic Japanese Tonkatsu",
    image: tonkatsu
  },
  {
    title: "Miso Ramen",
    description: "Classic ramen with a savory miso broth",
    image: misoRamen
  },
  {
    title: "Yakitori",
    description: "Grilled chicken skewers with a sweet soy glaze",
    image: yakitori
  },
  {
    title: "Tempura Udon",
    description: "Thick udon noodles in a dashi broth with shrimp tempura",
    image: tempuraUdon
  },
  {
    title: "Gyoza",
    description: "Pan-fried pork and vegetable dumplings",
    image: gyoza
  },
  {
    title: "Sashimi Platter",
    description: "A chef's selection of fresh, raw fish",
    image: sashimi
  }
];

export function menuInit(container) {
  menuList.forEach((menu) => {
    const card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

    const image = document.createElement("img");
    image.src = menu.image;
    card.appendChild(image);

    const title = document.createElement("p");
    title.textContent = menu.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = menu.description;
    card.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Place Order";
    button.className = "button";
    card.appendChild(button);
  })
}
