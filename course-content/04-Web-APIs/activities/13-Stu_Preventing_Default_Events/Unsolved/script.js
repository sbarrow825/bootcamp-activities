var calculateTipEl = document.getElementById("submit")
var totalPriceEl = document.getElementById("totalPrice");
var tipPercentageEl = document.querySelector("#tipPercentage");
var thisTip;

calculateTipEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(tipPercentageEl.value);
  });