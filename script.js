const btn = document.querySelector(".new");
const close = document.querySelector(".close");
const main = document.querySelector(".blur");

btn.addEventListener('click', () => {
    main.style.display = "flex";
})

close.addEventListener('click', () => {
    main.style.display = "none";
})