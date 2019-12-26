var winRateSlider = document.getElementById("winRateRange");
var winRateOutput = document.getElementById("winRateDisplay");
var payOffSlider = document.getElementById("payOffRange");
var payOffOutput = document.getElementById("payOffDisplay");
var riskPerTradeSlider = document.getElementById("riskperTradeRange");
var riskPerTradeOutput = document.getElementById("riskperTradeDisplay");
var drawdownSlider = document.getElementById("drawdownRange");
var drawdownOutput =document.getElementById("drawdownDisplay");
var numberOfTrialsSlider = document.getElementById("numberOfTrialsRange");
var numberOfTrialsOutput = document.getElementById("numberOfTrialsDisplay");

winRateOutput.innerHTML = winRateSlider.value;
payOffOutput.innerHTML = payOffSlider.value;
riskPerTradeOutput.innerHTML = riskPerTradeSlider.value;
drawdownOutput.innerHTML = drawdownSlider.value;
numberOfTrialsOutput.innerHTML = numberOfTrialsSlider.value;

winRateSlider.oninput = function() {
  winRateOutput.innerHTML = this.value + " %";
  riskOfRuinPercent();
  maxLosingStreak();
  maxWinningStreak();
}

payOffSlider.oninput = function() {
  payOffOutput.innerHTML = this.value;
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
};

riskOfRuinPercent();
maxDrawDown();
maxLosingStreak();
maxWinningStreak();

