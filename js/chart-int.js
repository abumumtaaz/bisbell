//[Master Javascript]


//Template script here
jQuery(window).load( function(){
		
	/*------- Line Chart--------*/
		var lineChartData = {
            labels: ["January","February","March","April","May","June","July"],
            datasets: [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				},
				{
					fillColor : "rgba(200,147,165,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [50,68,17,57,24,96,100]
				}
			]
		
        }
        var myLine = new Chart(document.getElementById("dart-line-chart").getContext("2d")).Line(lineChartData);
		
		/*------- Bar Chart--------*/
		var dData = function() {
		  return Math.round(Math.random() * 90) + 10
		};
		
		var barChartData = {
		  labels: ["January","February","March","April","May","June","July"],
		  datasets: [{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [65,59,90,81,56,55,50]
		  }]
		}
		var ctx = document.getElementById("dart-bar-chart").getContext("2d");
		var barChartDemo = new Chart(ctx).Bar(barChartData, {
		  responsive: true,
		  barValueSpacing: 2
		});
	
		/*------- Radar Chart--------*/
    	var radarData = {
		labels : ["A","B","C","D","E","F","G"],
		datasets : [
			{
				 fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [28,48,40,19,96,27,100]
			}
		]
		}
		var ctx2 = document.getElementById("dart-radar-chart").getContext("2d");
		var myNewChart = new Chart(ctx2).Radar(radarData);
		new Chart(ctx2).Radar(radarData,options);	
	});
	
	/*------- Polar Area Chart--------*/
		var chartData = [
				{
						value : 62,
						color: "#D97041"
					},
					{
						value : 70,
						color: "#C7604C"
					},
					{
						value : 41,
						color: "#21323D"
					},
					{
						value : 24,
						color: "#9D9B7F"
					},
					{
						value : 55,
						color: "#7D4F6D"
					},
					{
						value : 18,
						color: "#584A5E"
				}
			];
		var myPolarArea = new Chart(document.getElementById("dart-polar-chart").getContext("2d")).PolarArea(chartData);
		
		/*------- Pie Chart--------*/
		var pieData = [
				{
					value: 30,
					color:"#F38630"
				},
				{
					value : 50,
					color : "#E0E4CC"
				},
				{
					value : 100,
					color : "#69D2E7"
				},
				{
					value : 45,
					color : "#1E73BE"
				}

			];
		var myPie = new Chart(document.getElementById("dart-pie-chart").getContext("2d")).Pie(pieData);
    /*------- Doughnut Chart--------*/
		 var doughnutData = [
				{
					value: 30,
					color:"#F7464A"
				},
				{
					value : 50,
					color : "#46BFBD"
				},
				{
					value : 100,
					color : "#FDB45C"
				},
				{
					value : 40,
					color : "#949FB1"
				},
				{
					value : 120,
					color : "#4D5360"
				}
			];
       var myDoughnut = new Chart(document.getElementById("dart-donut-chart").getContext("2d")).Doughnut(doughnutData);


	



