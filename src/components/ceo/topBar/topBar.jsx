import React from "react";
import "./topBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from '@mui/material/Tooltip';

const TopBar = ({title}) => {
    const handleAddTask = () => {
        // Add your task creation logic here
        console.log("Add task clicked");
    };

    return (
        <div className="ceo-top-bar-container">
            <div className="ceo-top-bar">
                <div className="top-bar-left">
                    <h3 className="dashboard-title">{title}</h3>
                </div>
                
                
                
                <div className="top-bar-right">
                   <button className="add-task-btn" onClick={handleAddTask}>
                        <AddIcon className="add-icon" />
                        Add Tasks
                    </button>
                    <div className="notification-wrapper">
                       <Tooltip title=" Notification">
                        <NotificationsIcon className="top-bar-icon" />
                        <span className="notification-badge">3</span>
                        </Tooltip>
                    </div>
                    <div className="profile-wrapper">
                       <Tooltip title="Profile">
                        <AccountCircleIcon className="top-bar-icon profile-icon" />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;