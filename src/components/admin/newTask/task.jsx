import React, { useState } from "react";
import "./task.css";
import TopBar from "../topBar/topBar";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import DeleteIcon from "@mui/icons-material/Delete";
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
        if (score >= 9) return "admin-new-task-score-excellent";
        if (score >= 8) return "admin-new-task-score-good";
        if (score >= 7) return "admin-new-task-score-average";
        return "admin-new-task-score-poor";
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
        <div className="admin-new-task-container">
            <TopBar title={"Tasks"} />
            <div className="admin-new-task">
                <div className="admin-new-task-table-container">
                    <div className="admin-new-task-table-title-div">
                        <h3 className="admin-new-task-table-title">New Tasks</h3>
                    </div>
                    <div className="admin-new-task-table-wrapper">
                        <table className="admin-new-task-task-table">
                            <thead className="admin-new-task-table-header">
                                <tr>
                                    <th className="admin-new-task-table-th">Task ID</th>
                                    <th className="admin-new-task-table-th">Task Name</th>
                                    <th className="admin-new-task-table-th">Description</th>
                                    <th className="admin-new-task-table-th">Created</th>

                                    <th className="admin-new-task-table-th">Department</th>
                                    <th className="admin-new-task-table-th">Assignee</th>

                                    <th className="admin-new-task-table-th">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="admin-new-task-table-body">
                                {filteredTasks.map((task) => (
                                    <tr key={task.id} className="admin-new-task-table-row">
                                        <td className="admin-new-task-table-td">
                                            <span className="task-id-badge">{task.id}</span>
                                        </td>
                                        <td className="admin-new-task-table-td">
                                            <div className="task-name">{task.name}</div>
                                        </td>
                                        <td className="admin-new-task-table-td">
                                            <div className="task-description">{task.description}</div>
                                        </td>
                                        <td className="admin-new-task-table-td task-date">{task.createDate}</td>

                                        <td className="admin-new-task-table-td">
                                            <div className="admin-new-task-department-name">{task.department}</div>
                                        </td>
                                        <td className="admin-new-task-table-td">
                                            <div className="admin-new-task-assignee-container">
                                                <div className="admin-new-task-assignee-info">
                                                    <div className="admin-new-task-assignee-name">{task.assignee}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="admin-new-task-table-td">
                                            <div className="admin-new-task-action-buttons">
                                                <button
                                                    className="admin-new-task-action-btn admin-new-task-approve-btn"
                                                    title="Approve"
                                                    onClick={() => handleApprove(task.id)}
                                                >
                                                    Approve
                                                </button>

                                                <button
                                                    className="admin-new-task-action-btn admin-new-task-edit-btn"
                                                    title="Edit"
                                                >
                                                    Edit
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
