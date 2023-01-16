const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "clear") {
            display.innerText = "0";
        } else if (item.id == "erase") {
            if (display.textContent.length == 1) {
                display.innerText = "0";
            } else {
                display.innerText = display.textContent.substring(0, display.textContent.length - 1);
            }
        }
    });
});

