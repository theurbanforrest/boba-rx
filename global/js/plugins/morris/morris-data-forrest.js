// Morris.js charts for Forrest's


class Dashboard {
    constructor(targetdiv) {
        this.myChart;
        this.userPersona;
        this.jobList;
        this.expLevel;
        this.salary;

        this.initMyChart(targetdiv);
    }
    
};

Dashboard.prototype.initMyChart = function(targetdiv) {

    this.myChart = Morris.Bar({
        element: targetdiv,
        data: [
            {
                salary: '$80-89k',
                interested: 6810
            },
            {
                salary: '$90-99k',
                interested: 5670
            },
            {
                salary: '$100-109k',
                interested: 4820
            },
            {
                salary: '$110-119k',
                interested: 15073
            },
            {
                salary: '$120-129k',
                interested: 10687
            },
            {
                salary: '$130-139k',
                interested: 8432
            }
        ],
        gridTextSize: 8,
        xkey: 'salary',
        xLabelAngle: 35,
        ykeys: ['interested'],
        labels: ['interested'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });
};


var hello = new Dashboard('forrest-chart');


var a = [
    'Job Seeker',
    'Recruiter'
];

var b = [
    'Retail Pharmacist',
    'Retail Pharmacy Manager',
    'Insurance Pharmacist',
    'Insurance Pharmacy Manager',
    'Clinical Pharmacist',
    'Clinical Pharmacy Manager'
];

var c = [
    'little experience',
    'some experience',
    'lots of experience'
];

    var dataSet1 = [
        {
            salary: '$110-119k',
            interested: 12453            
        },
        {
            salary: '$120-129k',
            interested: 11342
        },
        {
            salary: '$130-139k',
            interested: 8432
        }
    ];

    var dataSet2 = [
        {
            salary: '$40-49k',
            interested: 6094            
        },
        {
            salary: '$50-59k',
            interested: 8934
        },
        {
            salary: '$60-69k',
            interested: 2341
        },
        {
            salary: '$70-79k',
            interested: 2930
        }
    ];

    var isDataSet1 = true;

$('#change-data-btn').click( function(){
    if(isDataSet1) {
        hello.myChart.setData(dataSet1);
        isDataSet1 = false;
        return;
    }
    else {
        hello.myChart.setData(dataSet2);
        isDataSet1 = true;
        return;
    }
});