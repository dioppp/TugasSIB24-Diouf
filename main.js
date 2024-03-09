document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".slide");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel_button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="nav">
            ${buttonsHtml.join("")}
        </div>
    `);

    console.log(buttonsHtml);
    const buttons = carousel.querySelectorAll(".carousel_button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // unselect all items
            items.forEach(item => item.classList.remove("slide--selected"));
            buttons.forEach(button => button.classList.remove("carousel_button--selected"));

            items[i].classList.add("slide--selected");
            button.classList.add("carousel_button--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("slide--selected");
    buttons[0].classList.add("carousel_button--selected");
});