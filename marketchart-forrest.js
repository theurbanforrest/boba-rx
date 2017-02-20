/*
MARKETCHART-FORREST.js

Defines a MarketChart object
    Has a Morris chart
    Has filters to update Morris chart

Requires
    jQuery
*/

class MarketChart {
    constructor(targetDiv,filterNamesArray) {
        this.chart;
        this.filterList = [];

        this.initChart(targetDiv);
        this.initFilterList(filterNamesArray);
    }
}

MarketChart.prototype.initChart = function(targetDiv) {
    this.chart = Morris.Bar({
            element: targetDiv,
            data: [],

            gridTextSize: 8,
            xkey: 'salary',
            xLabelAngle: 35,
            ykeys: ['interested'],
            labels: ['interested'],
            pointSize: 1,
            hideHover: 'auto',
            resize: true   
        });
    return true;
}

MarketChart.prototype.initFilterList = function(filterNamesArray) {
    for(var i=0;i<filterNamesArray.length;i++){
        this.filterList[i] = filterNamesArray[i];
    }
    return true;
}

MarketChart.prototype.setData = function(morrisDataSet) {
    this.chart.setData(morrisDataSet);
    return true;
}

MarketChart.prototype.redraw = function() {
    this.chart.redraw();
}