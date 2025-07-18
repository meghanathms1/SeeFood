import React from "react";
import "./topcards.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
const topcards = () => {
    return (
        <div className="manager-top-cards">
            <div className="manager-top-card">
                <div className="manager-top-card-left">
                    <p>Completed Task </p>
                    <h2>30</h2>
                </div>
                <div className="manager-top-card-right">
                    <CheckCircleIcon className="manager-top-card-icon" />
                </div>
            </div>
            <div className="manager-top-card">
                <div className="manager-top-card-left">
                    <p>Pending Task </p>
                    <h2>30</h2>
                </div>
                <div className="manager-top-card-right">
                    <PendingActionsIcon  className="manager-top-card-icon" />
                </div>
            </div>
            <div className="manager-top-card">
                <div className="manager-top-card-left">
                    <p>Overdue Tasks</p>
                    <h2>30</h2>
                </div>
                <div className="manager-top-card-right">
                    < AccessAlarmsIcon  className="manager-top-card-icon" />
                </div>
            </div>
            <div className="manager-top-card">
                <div className="manager-top-card-left">
                    <p>Avarage Score</p>
                    <h2>7/10</h2>
                </div>
                <div className="manager-top-card-right">
                    <SportsScoreIcon className="manager-top-card-icon" />
                </div>
            </div>
        </div>
    );
};

export default topcards;
