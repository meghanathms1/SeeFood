import React, { useState } from "react";
import "./task.css";
import TopBar from "../topBar/topBar";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const task = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const tasks = [
        {
            id: "TSK-001",
            name: "Website Redesign",
            description: "Complete redesign of company website with modern UI/UX",
            createDate: "2024-01-15",
            assignDate: "2024-01-16",
            receivedDate: "2024-01-16",
            status: "in-progress",
            department: "Design",
            assignee: "Sarah Johnson",
            score: 8,
        },
        {
            id: "TSK-002",
            name: "Database Migration",
            description: "Migrate legacy database to new cloud infrastructure",
            createDate: "2024-01-10",
            assignDate: "2024-01-12",
            receivedDate: "2024-01-12",
            status: "completed",
            department: "IT",
            assignee: "Michael Chen",
            score: 9,
        },
        {
            id: "TSK-003",
            name: "Marketing Campaign",
            description: "Launch Q1 marketing campaign for new product line",
            createDate: "2024-01-20",
            assignDate: "2024-01-22",
            receivedDate: "2024-01-23",
            status: "pending",
            department: "Marketing",
            assignee: "Emily Davis",
            score: 7,
        },
        {
            id: "TSK-004",
            name: "Security Audit",
            description: "Comprehensive security audit of all systems",
            createDate: "2024-01-05",
            assignDate: "2024-01-08",
            receivedDate: "2024-01-08",
            status: "on-hold",
            department: "Security",
            assignee: "David Wilson",
            score: 8,
        },
        {
            id: "TSK-005",
            name: "Employee Training",
            description: "Conduct quarterly training sessions for all departments",
            createDate: "2024-01-25",
            assignDate: "2024-01-26",
            receivedDate: "2024-01-26",
            status: "in-progress",
            department: "HR",
            assignee: "Lisa Thompson",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },

        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
        {
            id: "TSK-006",
            name: "Budget Review",
            description: "Review and optimize departmental budget allocations",
            createDate: "2024-01-30",
            assignDate: "2024-02-01",
            receivedDate: "2024-02-01",
            status: "completed",
            department: "Finance",
            assignee: "Robert Brown",
            score: 9,
        },
    ];

    const getStatusBadge = (status) => {
        return (
            <span className={`status-badge status-${status}`}>
                {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
            </span>
        );
    };

    const getScoreColor = (score) => {
        if (score >= 9) return "score-excellent";
        if (score >= 8) return "score-good";
        if (score >= 7) return "score-average";
        return "score-poor";
    };

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("");
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
            task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || task.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    return (
        <div className="ceo-task-container">
            <TopBar title={"Tasks"} />
            <div className="ceo-task">
                <div className="ceo-table-container">
                    <div className="ceo-task-table-title-div">
                        <h3 className="ceo-task-table-title">All Tasks</h3>
                    </div>
                    <div className="table-wrapper">
                        <table className="task-table">
                            <thead className="table-header">
                                <tr>
                                    <th className="table-th">Task ID</th>
                                    <th className="table-th">Task Name</th>
                                    <th className="table-th">Description</th>
                                    <th className="table-th">Created</th>
                                    <th className="table-th">Assigned</th>
                                    <th className="table-th">Status</th>
                                    <th className="table-th">Department</th>
                                    <th className="table-th">Assignee</th>
                                    <th className="table-th">Score</th>
                                    <th className="table-th">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {filteredTasks.map((task) => (
                                    <tr key={task.id} className="table-row">
                                        <td className="table-td">
                                            <span className="task-id-badge">{task.id}</span>
                                        </td>
                                        <td className="table-td">
                                            <div className="task-name">{task.name}</div>
                                        </td>
                                        <td className="table-td">
                                            <div className="task-description">{task.description}</div>
                                        </td>
                                        <td className="table-td task-date">{task.createDate}</td>
                                        <td className="table-td task-date">{task.assignDate}</td>
                                        <td className="table-td">{getStatusBadge(task.status)}</td>
                                        <td className="table-td">
                                            <div className="department-name">{task.department}</div>
                                        </td>
                                        <td className="table-td">
                                            <div className="assignee-container">
                                                <div className="assignee-info">
                                                    <div className="assignee-name">{task.assignee}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-td">
                                            <div className={`task-score ${getScoreColor(task.score)}`}>{task.score}</div>
                                        </td>
                                        <td className="table-td">
                                            <div className="action-buttons">
                                                <button className="action-btn edit-btn">
                                                    <EditIcon className="action-icon" />
                                                </button>
                                                <button className="action-btn delete-btn">
                                                    <DeleteIcon className="action-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default task;
