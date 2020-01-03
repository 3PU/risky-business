$(document).ready(function() {

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
    maxDrawDown();
    maxLosingStreak();
    maxWinningStreak();
    }

    payOffSlider.oninput = function() {
    payOffOutput.innerHTML = this.value + "R";
    riskOfRuinPercent();
    maxDrawDown();
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
    riskOfRuinPercent();
    maxLosingStreak();
    maxWinningStreak();
    maxDrawDown();
    }

    function setElementValue (elementID, value) {
        document.getElementById(elementID).innerHTML = value.toFixed(2) + " %";
    }

    function riskOfRuin (w, p, r, n) {
        var totalRiskOfRuin = ((w + (r *10)) - (p *5) *n / 1000);
        return totalRiskOfRuin;
    }

    function drawDown (w, d, n) {
        var totalDrawDown = (n / (w + d) /5);
        return totalDrawDown;
    }

    function losingStreak (w, n) {
        var totalMaxLosingStreak = ((100 - w) *n) * 0.001;
        return totalMaxLosingStreak;
    }

    function winningStreak (w, n) {
        var totalMaxWinningStreak = (w * n) *0.001;
        return totalMaxWinningStreak;
    }

    var riskOfRuinPercent = function () {
        var w = parseInt(winRateSlider.value);
        var p = parseInt(payOffSlider.value);
        var r = parseInt(riskPerTradeSlider.value);
        var n = parseInt(numberOfTrialsSlider.value)
        var calculatedRiskOfRuin = riskOfRuin (w, p, r, n);
        setElementValue("riskofruinOutput", calculatedRiskOfRuin);
    }

    var maxDrawDown = function () {
        var w = parseInt(winRateSlider.value);
        var d = parseInt(drawdownSlider.value);
        var n = parseInt(numberOfTrialsSlider.value)
        var calculatedDrawDown = drawDown (w, d, n);
        setElementValue("riskofdrawdownOutpout", calculatedDrawDown);
    }

    var maxLosingStreak = function () {
        var w = parseInt(winRateSlider.value);
        var n = parseInt(numberOfTrialsSlider.value)
        var calculatedMaxLosingStreak = losingStreak (w,n);
        setElementValue("maxlossOutput", calculatedMaxLosingStreak);
    }

    var maxWinningStreak = function () {
        var w = parseInt(winRateSlider.value);
        var n = parseInt(numberOfTrialsSlider.value);
        var calculatedMaxWinningStreak = winningStreak (w, n);
        setElementValue("maxwinOutput", calculatedMaxWinningStreak);
    }

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

})