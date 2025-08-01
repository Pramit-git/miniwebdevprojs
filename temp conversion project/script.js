const textbox = document.getElementById("mytextbox")
const tofah = document.getElementById("tofahrenheit")
const tocel = document.getElementById("tocelsius")
const result = document.getElementById("myresult")
let temp;

function convert() {
    if (tofah.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "degree fahrenheit"
    }
    else if (tocel.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "degree celsius"
    }
    else {
        result.textContent = "Select a unit"
    }

}