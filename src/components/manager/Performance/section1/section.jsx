import React from "react";
import "./section.css";
import Score from "./Score/score";
import CompletedTasks from "./CompletedTask/completedTask";
import PieChart from "./PieChart/pieChart";
const section1 = () => {
    return (
        <div className="performace-section-1">
            <Score />
            <CompletedTasks />
            <PieChart/>
        </div>
    );
};

export default section1;
