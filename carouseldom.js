const carousel = document.querySelector(".carousel");
const view = document.querySelector(".view");
const previews = document.querySelectorAll(".preview");

carousel.addEventListener("click", function (e) {
    // Check if the selected one is preview
    if (e.target.className == "preview") {
        view.src = e.target.src;
        view.classList.add("fade");
        setTimeout(function () {
            view.classList.remove("fade");
        }, 500);

        previews.forEach(function (preview) {
            preview.className = "preview";
        })

        e.target.classList.add("selected");
    }
})