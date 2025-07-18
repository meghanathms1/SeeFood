import React, { useState } from "react";
import "./sideBar.css";
import CompanyLogo from "../../../assets/logo-blue.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router';

const SideBar = () => {
    const [activeItem, setActiveItem] = useState("dashboard");
    const [expanded, setExpanded] = useState(null);
    const navigate = useNavigate();

    const navigationItems = [
        {
            id: "dashboard",
            text: "Dashboard",
            icon: <DashboardIcon />,
            path: "admin",
        },
        {
            id: "tasks",
            text: "Tasks",
            icon: <TaskIcon />,
            children: [
                { id: "assigned-tasks", text: "Assigned Tasks", path: "admin/assigned-tasks" },
                { id: "new-tasks", text: "New Tasks", path: "admin/new-task" },
            ],
        },
        {
            id: "view-managers",
            text: "Managers",
            icon: <SupervisorAccountIcon />,
            path: "admin/managers",
        },
            {
            id: "view-Departments",
            text: "Departments",
            icon: <GroupsIcon  />,
            path: "admin/departments",
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

        if (item.children) {
            setExpanded(prev => (prev === item.id ? null : item.id));
        } else {
            setExpanded(null);
            navigate(`/${item.path}`);
        }
    };

    const handleSubItemClick = (subItem) => {
        setActiveItem(subItem.id);
        navigate(`/${subItem.path}`);
    };

    return (
        <div className="admin-side-bar-container">
            <div className="admin-side-bar">
                <div className="admin-company-logo-div">
                    <img src={CompanyLogo} alt="Company Logo" className="admin-company-logo" />
                </div>

                <nav className="admin-sidebar-nav">
                    {navigationItems.map((item) => (
                        <div key={item.id}>
                            <div
                                className={`admin-nav-item ${activeItem === item.id ? "admin-active" : ""}`}
                                onClick={() => handleNavClick(item)}
                            >
                                <span className="admin-nav-icon">{item.icon}</span>
                                <span className="admin-nav-text">{item.text}</span>

                                {item.children && (
                                    <span className={`dropdown-arrow ${expanded === item.id ? "rotated" : ""}`}>
                                        <ExpandMoreIcon />
                                    </span>
                                )}
                            </div>

                            <div
                                className={`admin-sub-items-wrapper ${
                                    expanded === item.id ? "expanded" : ""
                                }`}
                            >
                                {item.children &&
                                    item.children.map((sub) => (
                                        <div
                                            key={sub.id}
                                            className={`admin-sub-item ${activeItem === sub.id ? "admin-active" : ""}`}
                                            onClick={() => handleSubItemClick(sub)}
                                        >
                                            {sub.text}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
