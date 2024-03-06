var buttons = document.querySelectorAll(".button");
var display = document.getElementById("display");

var operacion = null;
var primerNumero = null;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isFinite(this.innerText)) {
      display.innerText += this.innerText;
    } else if (["+", "-", "*", "/"].includes(this.innerText)) {
      primerNumero = parseFloat(display.innerText);
      operacion = this.innerText;
      display.innerText = "";
    } else if (this.innerText === "C") {
      display.innerText = "";
    } else if (this.id === "remove") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (this.id === "equal") {
      var segundoNumero = parseFloat(display.innerText);
      switch (operacion) {
        case "+":
          display.innerText = primerNumero + segundoNumero;
          break;
        case "-":
          display.innerText = primerNumero - segundoNumero;
          break;
        case "*":
          display.innerText = primerNumero * segundoNumero;
          break;
        case "/":
          if (segundoNumero != 0) {
            display.innerText = primerNumero / segundoNumero;
          } else {
            display.innerText = "Error: División por cero";
          }
          break;
      }
      operacion = null;
      primerNumero = null;
    }
  });
});
