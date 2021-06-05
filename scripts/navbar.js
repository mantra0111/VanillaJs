const hamburgerButton = document.querySelector("#hamburger-button");
const navbarLinks = document.querySelector("#navigation-links")
const header = document.querySelector("header")
let open = false;

const closedStyles = {
    color: "#fff",
    margin: "-0.25em 0px 0px 86vw",
    transform: "rotate(45deg)",
    fontSize: "60px"
}

hamburgerButton.addEventListener("click", () => {
    if (!open) {
        // transform the hamburger into an x 
        hamburgerButton.style.color = closedStyles.color
        hamburgerButton.style.margin = closedStyles.margin
        hamburgerButton.style.transform = closedStyles.transform
        hamburgerButton.style.fontSize = closedStyles.fontSize
        hamburgerButton.innerHTML = "+"
        // hide links
        navbarLinks.style.display = "list-item"
        // change header height
        header.style.height = "450px"

    } else {
        hamburgerButton.style.color = "#000"
        hamburgerButton.innerHTML = "|||"
        hamburgerButton.style.margin = "0em 0px 0px 85vw"
        hamburgerButton.style.transform = "rotate(90deg)"
        hamburgerButton.style.fontSize = "40px";
        navbarLinks.style.display = "none"
        header.style.height = "65px"
    }
    open = !open;
});

// listen for resize 

function resizeListerner() {
    console.log(window.innerWidth)
}

window.onresize = resizeListerner;