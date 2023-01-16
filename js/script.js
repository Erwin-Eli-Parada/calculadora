const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
    item.addEventListener("click", () => {
        switch(item.id){
            case "clear":
                display.innerText = "0";
            break;
            case "erase":
                if (display.textContent.length == 1) {
                    display.innerText = "0";
                } else {
                    display.innerText = display.textContent.substring(0, display.textContent.length - 1);
                }
            break;
            case "multi":
                display.innerText=display.textContent.concat("*");
            break;
            case "divi":
                display.innerText=display.textContent.concat("/");
            break;
            case "plus":
                display.innerText=display.textContent.concat("+");
            break;
            case "minus":
                display.innerText=display.textContent.concat("-");
            break;
            case "dot":
                display.innerText=display.textContent.concat(".");
            break;
            case "doble":
                display.innerText=display.textContent.concat("00");
            break;
            case "equals":
                display.innerText = eval(display.textContent);
            break;
            case "1":
                display.innerText=display.textContent.concat("1");
            break;
            case "2":
                display.innerText=display.textContent.concat("2");
            break;
            case "3":
                display.innerText=display.textContent.concat("3");
            break;
            case "4":
                display.innerText=display.textContent.concat("4");
            break;
            case "5":
                display.innerText=display.textContent.concat("5");
            break;
            case "6":
                display.innerText=display.textContent.concat("6");
            break;
            case "7":
                display.innerText=display.textContent.concat("7");
            break;
            case "8":
                display.innerText=display.textContent.concat("8");
            break;
            case "9":
                display.innerText=display.textContent.concat("9");
            break;

        }
    });
});

