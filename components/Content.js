// import React from "react";
// // import styles from "../../styles/Home.module.css";
// import { Line } from "react-chartjs-2";
// import { Doughnut } from "react-chartjs-2";

// // import {CategoryScale, Chart, LinearScale, PointElement} from 'chart.js'; 
// import Chart from 'chart.js/auto';
// const data = {
// 	labels: [
// 		"January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"November",
// 		"December",
// 	],
// 	datasets: [
// 		{
// 			label: "Sales/ month",
// 			fill: true,
// 			lineTension: 0.1,
// 			backgroundColor: "rgba(75,192,192,0.4)",
// 			borderColor: "rgba(75,192,192,1)",
// 			borderCapStyle: "butt",
// 			borderDash: [],
// 			borderDashOffset: 0.0,
// 			borderJoinStyle: "miter",
// 			pointBorderColor: "rgba(75,192,192,1)",
// 			pointBackgroundColor: "#fff",
// 			pointBorderWidth: 0,
// 			pointHoverRadius: 0,
// 			pointHoverBackgroundColor: "rgba(75,192,192,1)",
// 			pointHoverBorderColor: "rgba(220,220,220,1)",
// 			pointHoverBorderWidth: 0,
// 			pointRadius: 0,
// 			pointHitRadius: 0,
// 			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
// 		},
// 	],
// };
// export default function Content(){
//     return(
// <div className='contentcontainer'>
// 			<div className='contentwrapper'>
// 				<div className='tabs'>
// 					<div className='categories'>
// 						<h2>Companies</h2>
// 					</div>
// 				</div>
// 				<div className='tabs'>
// 					<div className='categories'>
// 						<h2>Customers</h2>
// 					</div>
// 				</div>
// 				<div className='tabs'>
// 					<div className='categories'>
// 						<h2>Users</h2>
// 					</div>
// 				</div>
// 				<div className='tabs'>
// 					<div className='categories'>
// 						<h2>Projects</h2>
// 					</div>
// 				</div>
// 			</div>
// 			{/* chart started  */}
// 			 <div className='charts'>
// 				<div className='bar'>
// 					<h2>Sales</h2>
// 					<Line data={data} width={400} height={400} />
// 				</div>
// 				<div className='circle'>
// 					<h2>Customers Arrived</h2>
// 					<Doughnut data={data1} width={400} height={400} />
// 				</div>
// 			</div> 
// 		</div>






//     )
// }