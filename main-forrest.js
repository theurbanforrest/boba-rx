/*
MAIN-FORREST.js

Requires:
	helpers-forrest.js
	starterdata-forrest.js
	marketchart-forrest.js
*/
var marketChart;

var viewRole = getQParam('role');

var inputJob;
var inputExperience;
var inputSalary;


var marketChartDiv = 'forrest-chart';
var ctaRevealDivTarget = '#reveal-the-market';
var ctaChangeDataDivTarget = '#change-data-btn';

var marketChartPanelTitleDivTarget = '#viewRole-marketChart-panel-title';
var inputViewRoleDivTarget = '#viewRole-text';
var inputSalaryDivTarget = '#inputSalary-text';


$(document).ready( function(){
	if(viewRole == 'recruiter') {
		$(marketChartPanelTitleDivTarget).text('For Recruiters');
		$(inputViewRoleDivTarget).text('I am seeking a ');
		$(inputSalaryDivTarget).text(' and am willing to pay ');

	}
	else if(viewRole == 'candidate') {
		$(marketChartPanelTitleDivTarget).text('For Candidates');
		$(inputViewRoleDivTarget).text('I am a ');
		$(inputSalaryDivTarget).text(' looking to earn ');
	}
}); 

$(ctaRevealDivTarget).click( function(){
	marketChart = new MarketChart(marketChartDiv,['foo','bar']);

	/*Set the Morris chart*/
    if(isDataSet1) {
        marketChart.setData(dataSet1);
        isDataSet1 = false;
    }
    else {
        marketChart.setData(dataSet2);
        isDataSet1 = true;
    }
    /*Display animated Highlighted Callout number*/
    runCountUp('#highlighted-min',120);
    runCountUp('#highlighted-max',129);
});

$(ctaChangeDataDivTarget).click( function(){

    runCountUp('#highlighted-min',81);
    runCountUp('#highlighted-max',85);
    
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

$(window).on('resize', function() {
   if (!window.recentResize) {
      window.marketChart.chart.redraw();
      window.recentResize = true;
      setTimeout(function(){ window.recentResize = false; }, 200);
   }
   console.log('resized the chart');
});
