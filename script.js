const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filter.classList.toggle("filter-selected");
    });
});
