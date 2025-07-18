import React from "react";
import "./topBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

const TopBar = ({ title, name }) => {
    const handleAddTask = () => {
        // Add your task creation logic here
        console.log("Add task clicked");
    };

    return (
        <div className="manager-top-bar-container">
            <div className="manager-top-bar">
                <div className="manager-top-bar-left">
                    <h3 className="manager-dashboard-title">{title}</h3>
                </div>

                <div className="manager-top-bar-right">
                    <div className="manager-icons">
                        <div className="manager-notification-wrapper">
                            <Tooltip title="Notifications">
                                <NotificationsIcon className="manager-top-bar-icon" />
                            </Tooltip>
                            <span className="manager-notification-badge">3</span>
                        </div>
                        <div className="manager-profile-wrapper">
                            <Tooltip title="Manager Profile">
                                <div className="manager-profile-info">
                                    <AccountCircleIcon className="manager-top-bar-icon profile-icon" />
                                    <span className="manager-name">Hi, {name}</span>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
