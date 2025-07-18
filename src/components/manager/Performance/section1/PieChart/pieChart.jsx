import React from "react";
import "./pieChart.css";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const [state, setState] = React.useState({
        series: [44, 55, 13, 43],
        options: {
            chart: {
                width: 370,
                type: "pie",
            },
            labels: ["completed", "Pending", "On Hold", "In Progress"],

            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });

    return (
        <div className="manager-performance-piechart-container">
            <div className="manager-performance-piechart-header">
                <p className="manager-performance-piechart-title">Task Status</p>
            </div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={340} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default PieChart;
