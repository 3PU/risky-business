$(document).ready(function() {

    /* Declares all variables to remain unchanged*/

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


    /* Updates the slider-display and calculator output value upon each input */
    
    winRateSlider.oninput = function() {
    winRateOutput.innerHTML = this.value + " %";
    riskOfRuinPercent();
    maxDrawDown();
    maxLosingStreak();
    maxWinningStreak();
    };

    payOffSlider.oninput = function() {
    payOffOutput.innerHTML = this.value + "R";
    riskOfRuinPercent();
    maxDrawDown();
    };

    riskPerTradeSlider.oninput = function() {
    riskPerTradeOutput.innerHTML = this.value + " %";
    riskOfRuinPercent();
    };

    drawdownSlider.oninput = function() {
    drawdownOutput.innerHTML = this.value + " %";
    maxDrawDown();
    };

    numberOfTrialsSlider.oninput = function() {
    numberOfTrialsOutput.innerHTML = this.value;
    riskOfRuinPercent();
    maxLosingStreak();
    maxWinningStreak();
    maxDrawDown();
    };


    /* Takes the final calculation output and updates the specified element in the calculator output fields accordingly */

    function setElementValue (elementID, value) {
        document.getElementById(elementID).innerHTML = value.toFixed(2) + " %";
    }


    /* Performs calculation based on input values*/

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


    /* Defines variables based on each slider and forwards the value to the calculation function and set element function */

    var riskOfRuinPercent = function () {
        var w = parseInt(winRateSlider.value);
        var p = parseInt(payOffSlider.value);
        var r = parseInt(riskPerTradeSlider.value);
        var n = parseInt(numberOfTrialsSlider.value);
        var calculatedRiskOfRuin = riskOfRuin (w, p, r, n);
        setElementValue("riskofruinOutput", calculatedRiskOfRuin);
    };

    var maxDrawDown = function () {
        var w = parseInt(winRateSlider.value);
        var d = parseInt(drawdownSlider.value);
        var n = parseInt(numberOfTrialsSlider.value);
        var calculatedDrawDown = drawDown (w, d, n);
        setElementValue("riskofdrawdownOutpout", calculatedDrawDown);
    };

    var maxLosingStreak = function () {
        var w = parseInt(winRateSlider.value);
        var n = parseInt(numberOfTrialsSlider.value);
        var calculatedMaxLosingStreak = losingStreak (w,n);
        setElementValue("maxlossOutput", calculatedMaxLosingStreak);
    };

    var maxWinningStreak = function () {
        var w = parseInt(winRateSlider.value);
        var n = parseInt(numberOfTrialsSlider.value);
        var calculatedMaxWinningStreak = winningStreak (w, n);
        setElementValue("maxwinOutput", calculatedMaxWinningStreak);
    };


    /* Ensures slider value output directly upon page load and not only after user input */

    winRateOutput.innerHTML = winRateSlider.value + " %";
    payOffOutput.innerHTML = payOffSlider.value + "R";
    riskPerTradeOutput.innerHTML = riskPerTradeSlider.value + " %";
    drawdownOutput.innerHTML = drawdownSlider.value + " %";
    numberOfTrialsOutput.innerHTML = numberOfTrialsSlider.value;


    /* Ensures calculator output values are updated directly on page load and not only after user input */

    riskOfRuinPercent();
    maxDrawDown();
    maxLosingStreak();
    maxWinningStreak();


    /* Enables dashboard tooltip */

    $('.dashboard-tooltip').tooltip();

});