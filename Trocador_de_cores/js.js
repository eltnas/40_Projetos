const cores = [
    "Red",
    "Orange",
    "Black",
    "Silver",
    "SlateBlue",
    "Navy",
    "CornflowerBlue"
];
const btnChgColor = document.querySelector("#chgCor");

btnChgColor.addEventListener("click", () => {
    const randomColor = cores[Math.floor(Math.random() * cores.length)];
    const btnText = document.querySelector("span");
    document.body.style.backgroundColor = randomColor;
    btnText.textContent = randomColor;
})
