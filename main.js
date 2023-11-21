
const xValues1 = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

new Chart("myChart1", {
	type: "line",
	data: {
		labels: xValues1,
		datasets: [
			{
				data: [0.6025, 0.5725, 0.5725, 0.52, 0.61, 0.6275, 0.645, 0.6425, 0.6675, 0.6325, 0.6575],

				label: "EDUCATION EQUITY INDEX",
				// borderColor: "red",
				backgroundColor: "rgba(255,0,0,1.0)",
				borderColor: "rgba(255,0,0,0.2)",
				// borderDash: [5, 5],
				fill: false
			},
			{
				data: [0.597, 0.6355, 0.7117, 0.6484, 0.6911, 0.7187, 0.7528, 0.7516, 0.7854, 0.7849, 0.8291],

				label: "GENDER EQUITY INDEX",
				// borderColor: "green",
				// borderDash: [10, 5],
				backgroundColor: "rgba(0,255,0,1.0)",
				borderColor: "rgba(0,255,0,0.2)",

				fill: false
			},
			{
				data: [0.456, 0.491, 0.475, 0.527, 0.513, 0.504, 0.539, 0.569, 0.57, 0.645, 0.607],

				label: "INCOME EQUITY INDEX",
				// borderColor: "blue",
				borderColor: "rgba(0,0,255,0.2)",
				backgroundColor: "rgba(0,0,255,1.0)",
				// borderDash: [15, 5],
				fill: false
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'SOCIAL EQUITY INDEX', // Add your title here
			fontSize: 16,
			padding: 20
		},
		legend: {
			display: true
		}
	}
});


// Chart 2
const xValues2 = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
const yValues2 = [0.6025, 0.5725, 0.5725, 0.52, 0.61, 0.6275, 0.645, 0.6425, 0.6675, 0.6325, 0.6575];

new Chart("myChart2", {
	type: "line",
	data: {
		labels: xValues2,
		datasets: [{
			fill: false,
			// lineTension: 0,
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
			yAxes: [{ ticks: { min: 0.5, max: 0.7, stepSize: 0.05, } }],
		}
	}
});
