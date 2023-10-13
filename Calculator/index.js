let x = "";
let y = "";
let symbol = "";

function displayNumber() {
  const display = document.getElementById("display");
  if ((y === "" && symbol === "") || symbol === "=") {
    display.innerHTML = x;
  } else {
    display.innerHTML = x + `${symbol}` + y;
  }
}

function number(num) {
  if (symbol === "") {
    x += num;
  } else {
    y += num;
  }
  displayNumber();
}

function reset() {
  x = "";
  y = "";
  symbol = "";
  displayNumber();
}

function operation(param) {
  console.log(param);
  if (symbol === "") {
    symbol = param;
  } else {
    let temp = 0;
    if (symbol === "+") {
      temp = Number(x) + Number(y);
    } else if (symbol === "-") {
      temp = Number(x) - Number(y);
    } else if (symbol === "x") {
      temp = Number(x) * Number(y);
    } else if (symbol === "÷") {
      temp = Number(x) / Number(y);
    }
    x = temp.toString();
    y = "";
    if (param === "=") {
      symbol = "";
    } else {
      symbol = param;
    }
  }
  displayNumber();
}
