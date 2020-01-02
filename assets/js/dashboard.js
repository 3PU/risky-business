const winRateSlider = document.getElementById("winRateRange");
const winRateOutput = document.getElementById("winRateDisplay");
const payOffSlider = document.getElementById("payOffRange");
const payOffOutput = document.getElementById("payOffDisplay");
const riskPerTradeSlider = document.getElementById("riskperTradeRange");
const riskPerTradeOutput = document.getElementById("riskperTradeDisplay");
const drawdownSlider = document.getElementById("drawdownRange");
const drawdownOutput =document.getElementById("drawdownDisplay");
const numberOfTrialsSlider = document.getElementById("numberOfTrialsRange");
const numberOfTrialsOutput = document.getElementById("numberOfTrialsDisplay");

winRateSlider.oninput = function() {
  winRateOutput.innerHTML = this.value + " %";
  riskOfRuinPercent();
  maxLosingStreak();
  maxWinningStreak();
}

payOffSlider.oninput = function() {
  payOffOutput.innerHTML = this.value + "R";
  riskOfRuinPercent();
}

riskPerTradeSlider.oninput = function() {
  riskPerTradeOutput.innerHTML = this.value + " %";
  riskOfRuinPercent();
}

drawdownSlider.oninput = function() {
  drawdownOutput.innerHTML = this.value + " %";
  maxDrawDown();
}

numberOfTrialsSlider.oninput = function() {
  numberOfTrialsOutput.innerHTML = this.value;
  maxLosingStreak();
  maxWinningStreak();
}

var riskOfRuinPercent = function () {
    var w = parseInt(winRateSlider.value);
    var p = parseInt(payOffSlider.value);
    var r = parseInt(riskPerTradeSlider.value);
    var totalRiskOfRuin = (w + p + r) * 0.9;
    document.getElementById("riskofruinOutput").innerHTML = totalRiskOfRuin.toFixed(2) + " %";
}

var maxDrawDown = function () {
    var w = parseInt(winRateSlider.value);
    var n = parseInt(numberOfTrialsSlider.value)
    var totalLossStreak = ((100 - w) * n) * 0.001;
    document.getElementById("riskofdrawdownOutpout").innerHTML = totalLossStreak.toFixed(2) + " %";
}

var maxLosingStreak = function () {
    var w = parseInt(winRateSlider.value);
    var n = parseInt(numberOfTrialsSlider.value)
    var totalLossStreak = ((100 - w) * n) * 0.001;
    document.getElementById("maxlossOutput").innerHTML = totalLossStreak.toFixed(2) + " %";
}

var maxWinningStreak = function () {
    var w = parseInt(winRateSlider.value);
    var n = parseInt(numberOfTrialsSlider.value);
    var totalLossStreak = (w * n) * 0.001;
    document.getElementById("maxwinOutput").innerHTML = totalLossStreak.toFixed(2) + " %";
}

var init = function () {
winRateOutput.innerHTML = winRateSlider.value + " %";
payOffOutput.innerHTML = payOffSlider.value + "R";
riskPerTradeOutput.innerHTML = riskPerTradeSlider.value + " %";
drawdownOutput.innerHTML = drawdownSlider.value + " %";
numberOfTrialsOutput.innerHTML = numberOfTrialsSlider.value;

riskOfRuinPercent();
maxDrawDown();
maxLosingStreak();
maxWinningStreak();

$('.dashboard-tooltip').tooltip();

}

window.onload = init ();