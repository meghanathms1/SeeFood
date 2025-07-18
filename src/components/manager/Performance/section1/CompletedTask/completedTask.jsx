import React from "react";
import { Star, TrendingUp } from "@mui/icons-material";
import "./completedTask.css";

const ScoreCard = () => {
    return (
        <div className="manager-completed-task-card">
            <div className="manager-completed-task-header">
                <div className="manager-completed-task-icon">
                    <Star />
                </div>
                <h3>Completed Task</h3>
            </div>
            <div className="manager-completed-task-value">
                <span className="manager-completed-task-number">40</span>
            </div>
            <div className="manager-completed-task-trend">
                <span className="manager-completed-task-trend-indicator positive">
                    <TrendingUp className="manager-completed-task-trend-icon" />
                    5.2%
                </span>
                <span className="manager-completed-task-trend-text">from last month</span>
            </div>
        </div>
    );
};

export default ScoreCard;
