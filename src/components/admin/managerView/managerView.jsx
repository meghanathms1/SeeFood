import React, { useState } from "react";
import "./managerView.css";
import TopBar from "../topBar/topBar";

const Manager = () => {
    const [managers, setManagers] = useState([
        {
            id: "MGR-001",
            name: "Alice Johnson",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            designation: "Senior Designer",
            email: "alice.johnson@example.com",
        },
        {
            id: "MGR-002",
            name: "Brian Smith",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "brian.smith@example.com",
        },
        {
            id: "MGR-003",
            name: "Meghatahn",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "megha@example.com",
        },
         {
            id: "MGR-001",
            name: "Alice Johnson",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            designation: "Senior Designer",
            email: "alice.johnson@example.com",
        },
        {
            id: "MGR-002",
            name: "Brian Smith",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "brian.smith@example.com",
        },
        {
            id: "MGR-003",
            name: "Meghatahn",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "megha@example.com",
        },
         {
            id: "MGR-001",
            name: "Alice Johnson",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            designation: "Senior Designer",
            email: "alice.johnson@example.com",
        },
        {
            id: "MGR-002",
            name: "Brian Smith",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "brian.smith@example.com",
        },
        {
            id: "MGR-003",
            name: "Meghatahn",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "megha@example.com",
        },
         {
            id: "MGR-001",
            name: "Alice Johnson",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            designation: "Senior Designer",
            email: "alice.johnson@example.com",
        },
        {
            id: "MGR-002",
            name: "Brian Smith",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "brian.smith@example.com",
        },
        {
            id: "MGR-003",
            name: "Meghatahn",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "megha@example.com",
        },
         {
            id: "MGR-001",
            name: "Alice Johnson",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            designation: "Senior Designer",
            email: "alice.johnson@example.com",
        },
        {
            id: "MGR-002",
            name: "Brian Smith",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "brian.smith@example.com",
        },
        {
            id: "MGR-003",
            name: "Meghatahn",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            designation: "Tech Lead",
            email: "megha@example.com",
        },

        
    ]);

    const handleDelete = (id) => {
        const updated = managers.filter((m) => m.id !== id);
        setManagers(updated);
    };

    const getScoreColor = (score) => {
        if (score >= 9) return "admin-manager-score-excellent";
        if (score >= 8) return "admin-manager-score-good";
        if (score >= 7) return "admin-manager-score-average";
        return "admin-manager-score-poor";
    };

    return (
        <div className="admin-manager-container">
            <TopBar title={"Managers"} />
            <div className="admin-manager">
                <div className="admin-manager-table-container">
                    <div className="admin-manager-table-title-div">
                        <h3 className="admin-manager-table-title">All Managers</h3>
                    </div>
                    <div className="admin-manager-table-wrapper">
                        <table className="admin-manager-table">
                            <thead className="admin-manager-table-header">
                                <tr>
                                    <th className="admin-manager-table-th">ID</th>
                                    <th className="admin-manager-table-th">Name</th>
                                    <th className="admin-manager-table-th">Department</th>
                                    <th className="admin-manager-table-th">Designation</th>
                                    <th className="admin-manager-table-th">Email</th>
                                    <th className="admin-manager-table-th">Completed</th>
                                    <th className="admin-manager-table-th">Pending</th>
                                    <th className="admin-manager-table-th">Avg. Score</th>
                                    <th className="admin-manager-table-th">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="admin-manager-table-body">
                                {managers.map((manager) => (
                                    <tr key={manager.id} className="admin-manager-table-row">
                                        <td className="admin-manager-table-td">
                                            <span className="task-id-badge">{manager.id}</span>
                                        </td>
                                        <td className="admin-manager-table-td">{manager.name}</td>
                                        <td className="admin-manager-table-td">{manager.department}</td>
                                        <td className="admin-manager-table-td">{manager.designation}</td>
                                        <td className="admin-manager-table-td">{manager.email}</td>
                                        <td className="admin-manager-table-td">{manager.completedTasks}</td>
                                        <td className="admin-manager-table-td">{manager.pendingTasks}</td>
                                        <td className="admin-manager-table-td">
                                            <div className={`admin-manager-score ${getScoreColor(manager.averageScore)}`}>
                                                {manager.averageScore}
                                            </div>
                                        </td>
                                        <td className="admin-manager-table-td">
                                            <div className="admin-manager-action-buttons">
                                                <button className="admin-manager-action-btn admin-manager-edit-btn">Edit</button>
                                                <button
                                                    className="admin-manager-action-btn admin-manager-edit-btn"
                                                    style={{ backgroundColor: "#dc2626" }}
                                                    onClick={() => handleDelete(manager.id)}
                                                >
                                                    Delete
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

export default Manager;
