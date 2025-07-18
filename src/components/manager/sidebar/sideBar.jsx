import React, { useState } from "react";
import "./sideBar.css";
import CompanyLogo from "../../../assets/logo-blue.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const sideBar = () => {
    const [activeItem, setActiveItem] = useState("dashboard");
    const navigate = useNavigate();
    const navigationItems = [
        {
            id: "dashboard",
            text: "Dashboard",
            icon: <DashboardIcon />,
            // path: "ceo/dashboard",
            path: "manager/dashboard",
        },
        {
            id: "tasks",
            text: "My Tasks",
            icon: <TaskIcon />,
            path: "manager/tasks",
        },
        {
            id: "my-performance",
            text: "My Performance",
            icon: <TrendingUpIcon />,
            path: "manager/performance",
        },
        {
            id: "vision-board",
            text: "Vision Board",
            icon: <VisibilityIcon />,
            path: "",
        },
    ];

    const handleNavClick = (item) => {
        setActiveItem(item.id);
        navigate(`/${item.path}`);
        // Add your navigation logic here
        console.log(`/${item}`);
    };

    return (
        <div className="manager-side-bar-container">
            <div className="manager-side-bar">
                <div className="manager-company-logo-div">
                    <img src={CompanyLogo} alt="Company Logo" className="manager-company-logo" />
                </div>

                <nav className="manager-sidebar-nav">
                    {navigationItems.map((item) => (
                        <div
                            key={item.id}
                            className={`nav-item ${activeItem === item.id ? "active" : ""}`}
                            onClick={() => handleNavClick(item)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text">{item.text}</span>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default sideBar;
