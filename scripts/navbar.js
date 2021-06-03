const hamburgerButton = document.querySelector("#hamburger-button");
let open = false;


hamburgerButton.addEventListener("click", () => {
    if (!open) {
        hamburgerButton.style.color = "#fff"
        hamburgerButton.style.margin = "0em 0px 0px 88vw"
        hamburgerButton.style.transform = "rotate(45deg)"
        hamburgerButton.innerHTML = "+"

    } else {
        hamburgerButton.style.color = "#000"
        hamburgerButton.innerHTML = "|||"
        hamburgerButton.style.margin = "0em 0px 0px 85vw"
        hamburgerButton.style.transform = "rotate(90deg)"
    }
    open = !open;
});