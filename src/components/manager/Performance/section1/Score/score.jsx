import React from "react";
import { Star, TrendingUp } from "@mui/icons-material";
import "./Score.css";

const ScoreCard = () => {
    return (
        <div className="manager-performance-score-card">
            <div className="manager-performance-score-header">
                <div className="manager-performance-score-icon">
                    <Star />
                </div>
                <h3>Average Score</h3>
            </div>
            <div className="manager-performance-score-value">
                <span className="manager-performance-score-number">70</span>
                <span className="manager-performance-score-total">/100</span>
            </div>
            <div className="manager-performance-score-trend">
                <span className="manager-performance-trend-indicator manager-performance-positive">
                    <TrendingUp className="manager-performance-trend-icon" />
                    5.2%
                </span>
                <span className="manager-performance-trend-text">from last month</span>
            </div>
        </div>
    );
};

export default ScoreCard;
