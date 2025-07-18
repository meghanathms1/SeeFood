import React from "react";
import "./topcards.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
const topcards = () => {
    return (
        <div className="ceo-top-cards">
            <div className="ceo-top-card">
                <div className="ceo-top-card-left">
                    <p>Completed Task </p>
                    <h2>30</h2>
                </div>
                <div className="ceo-top-card-right">
                    <CheckCircleIcon className="ceo-top-card-icon" />
                </div>
            </div>
            <div className="ceo-top-card">
                <div className="ceo-top-card-left">
                    <p>Pending Task </p>
                    <h2>30</h2>
                </div>
                <div className="ceo-top-card-right">
                    <PendingActionsIcon  className="ceo-top-card-icon" />
                </div>
            </div>
            <div className="ceo-top-card">
                <div className="ceo-top-card-left">
                    <p>Unapproved Task </p>
                    <h2>30</h2>
                </div>
                <div className="ceo-top-card-right">
                    < AccessAlarmsIcon  className="ceo-top-card-icon" />
                </div>
            </div>
            <div className="ceo-top-card">
                <div className="ceo-top-card-left">
                    <p>Avarage Score</p>
                    <h2>70/100</h2>
                </div>
                <div className="ceo-top-card-right">
                    <SportsScoreIcon className="ceo-top-card-icon" />
                </div>
            </div>
        </div>
    );
};

export default topcards;
