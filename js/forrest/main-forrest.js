/*
MAIN-FORREST.js

Requires:
	helpers-forrest.js
	starterdata-forrest.js
	marketchart-forrest.js
*/

var marketChart;

$('#reveal-the-market').click( function(){
	marketChart = new MarketChart('forrest-chart',['foo','bar']);

    if(isDataSet1) {
        marketChart.setData(dataSet1);
        isDataSet1 = false;
        return;
    }
    else {
        marketChart.setData(dataSet2);
        isDataSet1 = true;
        return;
    }
});

$('#change-data-btn').click( function(){
    if(isDataSet1) {
        marketChart.setData(dataSet1);
        isDataSet1 = false;
        return;
    }
    else {
        marketChart.setData(dataSet2);
        isDataSet1 = true;
        return;
    }
});
