import React, { useState } from "react";
import "./sideBar.css";
import CompanyLogo from "../../../assets/logo-blue.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from 'react-router'
const sideBar = () => {
    const [activeItem, setActiveItem] = useState("dashboard");
const navigate = useNavigate();
    const navigationItems = [
        {
            id: "dashboard",
            text: "Dashboard",
            icon: <DashboardIcon />,
            path: "ceo/dashboard",
        },
        {
            id: "tasks",
            text: "Tasks",
            icon: <TaskIcon />,
            path: "ceo/tasks",
        },
      
        {
            id: "view-managers",
            text: "View Managers",
            icon: <SupervisorAccountIcon />,
            path: "ceo/managers",
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
        navigate(`/${item.path}`)
        // Add your navigation logic here
        console.log(`/${item}`);
    };

    return (
        <div className="ceo-side-bar-container">
            <div className="ceo-side-bar">
                <div className="company-logo-div">
                    <img src={CompanyLogo} alt="Company Logo" className="company-logo" />
                </div>

                <nav className="sidebar-nav">
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
