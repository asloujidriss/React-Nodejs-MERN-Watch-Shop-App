$(function(){        
    /* reportrange */
    if($("#reportrange").length > 0){   
        $("#reportrange").daterangepicker({                    
            ranges: {
               "Aujourd'hui": [moment(), moment()],
               "Hier": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               "les 7 derniers jours": [moment().subtract(6, 'days'), moment()],
               "les 30 derniers jours": [moment().subtract(29, 'days'), moment()],
               'Ce mois-ci': [moment().startOf('month'), moment().endOf('month')],
               'Le mois dernier': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'MM.DD.YYYY',
            separator: ' to ',
            startDate: moment().subtract('days', 29),
            endDate: moment()            
          },function(start, end) {
              $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });
        
        $("#reportrange span").html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    }
    /* end reportrange */
    
    /* Rickshaw dashboard chart */
    // var seriesData = [ [], [] ];
    // var random = new Rickshaw.Fixtures.RandomData(1000);

    // for(var i = 0; i < 100; i++) {
        // random.addData(seriesData);
    // }

    // var rdc = new Rickshaw.Graph( {
            // element: document.getElementById("dashboard-chart"),
            // renderer: 'area',
            // width: $("#dashboard-chart").width(),
            // height: 250,
            // series: [{color: "#33414E",data: seriesData[0],name: 'New'}, 
                     // {color: "#1caf9a",data: seriesData[1],name: 'Returned'}]
    // } );

    // rdc.render();

    // var legend = new Rickshaw.Graph.Legend({graph: rdc, element: document.getElementById('dashboard-legend')});
    // var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: rdc,legend: legend});
    // var order = new Rickshaw.Graph.Behavior.Series.Order({graph: rdc,legend: legend});
    // var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {graph: rdc,legend: legend} );        

    // var rdc_resize = function() {                
            // rdc.configure({
                    // width: $("#dashboard-area-1").width(),
                    // height: $("#dashboard-area-1").height()
            // });
            // rdc.render();
    // }

    // var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rdc});

    // window.addEventListener('resize', rdc_resize);        

    // rdc_resize();
    /* END Rickshaw dashboard chart */
    
    /* Donut dashboard chart */
    Morris.Donut({
        element: 'dashboard-donut-1',
        data: [
            {label: "Retour", value: 2513},
            {label: "Nouveaux", value: 764},
            {label: "Enregistré", value: 311}
        ],
        colors: ['#33414E', '#c2975b', '#95b75d'],
        resize: true
    });
    /* END Donut dashboard chart */
	
	
    /* Bar dashboard chart */
    Morris.Bar({
        element: 'dashboard-bar-1',
        data: [
            { y: 'Oct 10', a: 75, b: 35 },
            { y: 'Oct 11', a: 64, b: 26 },
            { y: 'Oct 12', a: 78, b: 39 },
            { y: 'Oct 13', a: 82, b: 34 },
            { y: 'Oct 14', a: 86, b: 39 },
            { y: 'Oct 15', a: 94, b: 40 },
            { y: 'Oct 16', a: 96, b: 41 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Nouveaux utilisateurs', 'Retour'],
        barColors: ['#33414E', '#c2975b'],
        gridTextSize: '10px',
        hideHover: true,
        resize: true,
        gridLineColor: '#E5E5E5'
    });
    /* END Bar dashboard chart */
    
 
    
});

