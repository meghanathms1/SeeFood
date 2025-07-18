import React from "react";
import "./section2.css";
import Graph from "./graph/graph";
import PieChart from "./PieChart/pieChart";
const section2 = () => {
    return (
        <div className="main-section-2">
            <Graph />
            <PieChart />
        </div>
    );
};

export default section2;
