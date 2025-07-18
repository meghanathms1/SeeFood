import React from "react";
import { useLocation } from "react-router-dom";
import "./topBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

const TopBar = ({ title }) => {
    const location = useLocation();

    const handleAddClick = () => {
        if (location.pathname === "/admin/managers") {
            console.log("Add Manager clicked");
        } else if (location.pathname === "/admin/departments") {
            console.log("Add Department clicked");
        }
    };

    const renderAddButton = () => {
        if (location.pathname === "/admin/managers") {
            return (
                <button className="add-task-btn" onClick={handleAddClick}>
                    <AddIcon className="add-icon" />
                    Add Manager
                </button>
            );
        } else if (location.pathname === "/admin/departments") {
            return (
                <button className="add-task-btn" onClick={handleAddClick}>
                    <AddIcon className="add-icon" />
                    Add Department
                </button>
            );
        }
        return null;
    };

    return (
        <div className="admin-top-bar-container">
            <div className="admin-top-bar">
                <div className="admin-top-bar-left">
                    <h3 className="admin-dashboard-title">{title}</h3>
                </div>

                <div className="admin-top-bar-right">
                    {renderAddButton()}

                    <div className="admin-notification-wrapper">
                        <Tooltip title="admin-Notification">
                            <NotificationsIcon className="admin-top-bar-icon" />
                        </Tooltip>
                        <span className="admin-notification-badge">3</span>
                    </div>

                    <div className="admin-profile-wrapper">
                        <Tooltip title="admin-Profile">
                            <AccountCircleIcon className="admin-top-bar-icon profile-icon" />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
