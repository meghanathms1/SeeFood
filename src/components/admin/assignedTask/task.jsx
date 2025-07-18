import React, { useState } from "react";
import "./task.css";
import TopBar from "../topBar/topBar";

const Task = () => {
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
        ,
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
        ,
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

        ,
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
        ,
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
    ];

    const getStatusBadge = (status) => (
        <span className={`status-badge status-${status}`}>
            {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
        </span>
    );

    const getScoreColor = (score) => {
        if (score >= 9) return "admin-task-assign-score-excellent";
        if (score >= 8) return "admin-task-assign-score-good";
        if (score >= 7) return "admin-task-assign-score-average";
        return "admin-task-assign-score-poor";
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
        <div className="admin-task-assign-container">
            <TopBar title={"Tasks"} />
            <div className="admin-task-assign">
                <div className="admin-task-assign-table-container">
                    <div className="admin-task-assign-table-title-div">
                        <h3 className="admin-task-assign-table-title">All Tasks</h3>
                    </div>
                    <div className="admin-task-assign-table-wrapper">
                        <table className="admin-task-assign-task-table">
                            <thead className="admin-task-assign-table-header">
                                <tr>
                                    <th className="admin-task-assign-table-th">Task ID</th>
                                    <th className="admin-task-assign-table-th">Task Name</th>
                                    <th className="admin-task-assign-table-th">Description</th>
                                    <th className="admin-task-assign-table-th">Created</th>
                                    <th className="admin-task-assign-table-th">Assigned</th>
                                    <th className="admin-task-assign-table-th">Status</th>
                                    <th className="admin-task-assign-table-th">Department</th>
                                    <th className="admin-task-assign-table-th">Assignee</th>
                                    <th className="admin-task-assign-table-th">Score</th>
                                    <th className="admin-task-assign-table-th">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="admin-task-assign-table-body">
                                {filteredTasks.map((task) => (
                                    <tr key={task.id} className="admin-task-assign-table-row">
                                        <td className="admin-task-assign-table-td">
                                            <span className="task-id-badge">{task.id}</span>
                                        </td>
                                        <td className="admin-task-assign-table-td">
                                            <div className="task-name">{task.name}</div>
                                        </td>
                                        <td className="admin-task-assign-table-td">
                                            <div className="task-description">{task.description}</div>
                                        </td>
                                        <td className="admin-task-assign-table-td task-date">{task.createDate}</td>
                                        <td className="admin-task-assign-table-td task-date">{task.assignDate}</td>
                                        <td className="admin-task-assign-table-td">{getStatusBadge(task.status)}</td>
                                        <td className="admin-task-assign-table-td">
                                            <div className="admin-task-assign-department-name">{task.department}</div>
                                        </td>
                                        <td className="admin-task-assign-table-td">
                                            <div className="admin-task-assign-assignee-container">
                                                <div className="admin-task-assign-assignee-info">
                                                    <div className="admin-task-assign-assignee-name">{task.assignee}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="admin-task-assign-table-td">
                                            <div className={`admin-task-assign-task-score ${getScoreColor(task.score)}`}>
                                                {task.score}
                                            </div>
                                        </td>
                                        <td className="admin-task-assign-table-td">
                                            <div className="admin-task-assign-action-buttons">
                                                <button className="admin-task-assign-action-btn admin-task-assign-edit-btn">
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

export default Task;
