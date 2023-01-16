/*funcion de la calculadora*/

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
            default:
                numeros(item.id);
            break;
        }
    });
});

const numeros = function numeros(num){
    display.textContent == "0" ? display.innerText = "" : display.innerText = display.textContent;
    display.innerText = display.textContent.concat(num);
}

/*funcion del dark mode*/

const calculadora = document.querySelector(".calculator");
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click",()=>{
    calculadora.classList.toggle("dark");
    themeToggler.classList.toggle("active");
});
