google.charts.load('current',{'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliSeconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string','Task ID');
    data.addColumn('string','Task Name');
    data.addColumn('string','Resource');
    data.addColumn('date','Start Date');
    data.addColumn('date','End Date');
    data.addColumn('number','Duration');
    
    data.addRows([
        ['PHP', 'PHP 5.x.x', 'php', new Date(2012,11,19), new Date(2016,3, 1),null],
        ['MYSQL', 'MYSQL 5.x.x', 'mysql', new Date(2012,11,19), new Date(2016, 3, 1),null],
        ['HTML', 'HTML5', 'html', new Date(2013,11,19), new Date(2016,3, 1),null],
    ]);
    
    var options = {
        height: 400,
        gantt: {
            trackHeight: 30
        }
    };
    
    var chart = new google.visualization.Gantt(document.getElementById('gantt-exp'));
    chart.draw(data, options);
}