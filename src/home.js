export function homeInit(container) {
    const heroCard = document.createElement("div");
    heroCard.className = "hero-card";
    container.appendChild(heroCard);

    (function createHeroCardContents() {
        const title = document.createElement("p");
        const description = document.createElement("p");
        const list = document.createElement("ul");

        title.textContent = "Daniela's Tonkatsu"
        description.textContent =
            "Where passion meets flavor.\n\n" +
            "Discover the art of authentic Japanese tonkatsu crafted with the freshest ingredients, " +
            "golden crisp perfection, and a touch of modern culinary artistry.\n\n" +
            "Join us for an unforgettable dining experience that blends tradition, taste, and comfort in every bite.";


        heroCard.appendChild(title);
        heroCard.appendChild(description);
        heroCard.appendChild(list);

        (function createList() {
            let listtArray = []
            for (let i = 0; i < 3; i++) {
                listtArray[i] = document.createElement("li");

                switch (i) {
                    case 0:
                        listtArray[i].textContent = "Open Monday-Friday 10:00am to 7:00pm";
                        break;
                    case 1:
                        listtArray[i].textContent = "Pangasinan, Philippines";
                        break;
                    case 2:
                        listtArray[i].textContent = "daniella@tonkatsu.com";
                        break;
                }
                list.appendChild(listtArray[i])
            }
        })()
    })();

    (function createCtaButton() {
        const ctaDiv = document.createElement("div");
        container.appendChild(ctaDiv);
        const ctaButton = document.createElement("button");
        ctaButton.textContent = "order now"
        ctaButton.className = "cta button"
        ctaDiv.appendChild(ctaButton);
    })()

}

