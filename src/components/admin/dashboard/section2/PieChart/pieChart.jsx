import React from "react";
import "./pieChart.css";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const [state, setState] = React.useState({
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: "pie",
            },
            labels: ["9-10", "7-8", "6-5", "3-4", "below 3"],

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
        <div className="admin-main-section2-piechart-container">
            <div className="admin-piechart-header">
                <p className="admin-piechart-title">Score Distribution</p>
            </div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default PieChart;
