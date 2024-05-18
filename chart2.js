const xValues2 = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

// Fetch data from the PHP backend
fetch('server.php')  // Assuming server.php is in the same directory
	.then(response => response.json())
	.then(yValues2 => {
		// Chart creation code
		new Chart("myChart2", {
			type: "line",
			data: {
				labels: xValues2,
				datasets: [{
					fill: false,
					backgroundColor: "rgba(255,0,0,1.0)",
					borderColor: "rgba(255,0,0,0.1)",
					data: yValues2
				}]
			},
			options: {
				title: {
					display: true,
					text: 'SOCIAL EQUITY INDEX',
					fontSize: 16,
					padding: 20
				},
				legend: { display: false },
				scales: {
					yAxes: [{ ticks: { min: 0.5, max: 0.7, stepSize: 0.05 } }],
				}
			}
		});
	})
	.catch(error => console.error('Error fetching data:', error));
