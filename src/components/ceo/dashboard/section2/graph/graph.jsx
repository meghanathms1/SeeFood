import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./graph.css";

const Graph = () => {
    const series = {
        monthDataSeries1: {
            prices: [34, 44, 54, 21, 12, 43, 33],
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
    };

    const [state] = useState({
        series: [
            {
                name: "Task Completion",
                data: series.monthDataSeries1.prices,
            },
        ],
        options: {
            chart: {
                type: "area",
                zoom: { enabled: false },
                toolbar: { show: false },
            },
            dataLabels: { enabled: false },
            stroke: { curve: "smooth", width: 2 },
            xaxis: {
                categories: series.monthDataSeries1.months,
                labels: { style: { fontSize: '12px' } },
            },
            yaxis: {
                labels: { style: { fontSize: '12px' } },
            },
            legend: {
                horizontalAlign: "left",
                fontSize: '14px',
            },
            colors: ['#1E88E5'],
        },
    });

    return (
        <div className="ceo-main-section2-graph-container">
            <div className="graph-header">
                <p className="graph-title">Task Completion Trend</p>
                <select className="graph-select">
                    <option>This Year</option>
                    <option>Last 6 Months</option>
                    <option>Last 1 Year</option>
                    <option>Last 2 Years</option>
                    <option>Over All</option>
                </select>
            </div>
            <div id="chart" style={{height:"100%"}}>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height="94%"
                />
            </div>
        </div>
    );
};

export default Graph;
