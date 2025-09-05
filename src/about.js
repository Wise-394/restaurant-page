export function aboutInit(container) {

    const card = document.createElement("div");
    card.className = "about-card"
    container.appendChild(card)
    // Title
    const title = document.createElement("h1");
    title.textContent = "About Us";
    card.appendChild(title);

    const paragraphDiv = document.createElement("div");
    paragraphDiv.className = "paragraph-div"
    card.appendChild(paragraphDiv);
    // Paragraph 1
    const p1 = document.createElement("p");
    p1.textContent =
        "Welcome to Daniella Tonkatsu, where every dish is a perfect balance of tradition and flavor. " +
        "Our passion lies in bringing you authentic Japanese comfort food, crafted with fresh, high-quality ingredients and a touch of culinary artistry.";
    paragraphDiv.appendChild(p1);

    // Paragraph 2
    const p2 = document.createElement("p");
    p2.textContent =
        "From our golden-crisp signature tonkatsu to hearty ramen and savory yakitori, " +
        "each meal is prepared with care to give you a true taste of Japan.";
    paragraphDiv.appendChild(p2);

    // Paragraph 3
    const p3 = document.createElement("p");
    p3.textContent =
        "At Daniella Tonkatsu, we believe dining is more than just eating—it’s about creating memorable experiences. " +
        "Whether you’re here with family, friends, or on your own, we aim to serve food that warms both the heart and the soul.";
    paragraphDiv.appendChild(p3);
}