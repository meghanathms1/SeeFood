import React, { useState } from "react";
import "./department.css";
import TopBar from "../topBar/topBar";

const Department = () => {
    const [managers, setManagers] = useState([
        {
            id: "DEP-001",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            manager: 9,
        },
        {
            id: "DEP-002",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            manager: 5,
        },
        {
            id: "DEP-003",
            department: "Marketing",
            completedTasks: 10,
            pendingTasks: 5,
            averageScore: 6.5,
            manager: 3,
        },
         {
            id: "DEP-001",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            manager: 9,
        },
        {
            id: "DEP-002",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            manager: 5,
        },
        {
            id: "DEP-003",
            department: "Marketing",
            completedTasks: 10,
            pendingTasks: 5,
            averageScore: 6.5,
            manager: 3,
        },
         {
            id: "DEP-001",
            department: "Design",
            completedTasks: 24,
            pendingTasks: 4,
            averageScore: 8.7,
            manager: 9,
        },
        {
            id: "DEP-002",
            department: "IT",
            completedTasks: 30,
            pendingTasks: 2,
            averageScore: 9.2,
            manager: 5,
        },
        {
            id: "DEP-003",
            department: "Marketing",
            completedTasks: 10,
            pendingTasks: 5,
            averageScore: 6.5,
            manager: 3,
        },
        
    ]);

    const handleDelete = (id) => {
        const updated = managers.filter((m) => m.id !== id);
        setManagers(updated);
    };

    const getScoreColor = (score) => {
        if (score >= 9) return "admin-department-score-excellent";
        if (score >= 8) return "admin-department-score-good";
        if (score >= 7) return "admin-department-score-average";
        return "admin-department-score-poor";
    };

    return (
        <div className="admin-department-container">
            <TopBar title={"Departments"} />
            <div className="admin-department">
                <div className="admin-department-table-container">
                    <div className="admin-department-table-title-div">
                        <h3 className="admin-department-table-title">All Departments</h3>
                    </div>
                    <div className="admin-department-table-wrapper">
                        <table className="admin-department-table">
                            <thead className="admin-department-table-header">
                                <tr>
                                    <th className="admin-department-table-th">Department ID</th>
                                    <th className="admin-department-table-th">Department</th>
                                    <th className="admin-department-table-th">Managers</th>
                                    <th className="admin-department-table-th">Completed Tasks</th>
                                    <th className="admin-department-table-th">Pending Tasks</th>
                                    <th className="admin-department-table-th">Total Tasks</th>
                                    <th className="admin-department-table-th">Avg. Score</th>
                                    <th className="admin-department-table-th">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="admin-department-table-body">
                                {managers.map((manager, index) => (
                                    <tr key={index} className="admin-department-table-row">
                                        <td className="admin-department-table-td">
                                            <span className="task-id-badge">{manager.id}</span>
                                        </td>
                                        <td className="admin-department-table-td">{manager.department}</td>
                                        <td className="admin-department-table-td">{manager.manager}</td>
                                        <td className="admin-department-table-td">{manager.completedTasks}</td>
                                        <td className="admin-department-table-td">{manager.pendingTasks}</td>
                                        <td className="admin-department-table-td">
                                            {manager.completedTasks + manager.pendingTasks}
                                        </td>
                                        <td className="admin-department-table-td">
                                            <div className={`admin-department-score ${getScoreColor(manager.averageScore)}`}>
                                                {manager.averageScore}
                                            </div>
                                        </td>
                                        
                                        <td className="admin-department-table-td">
                                            <div className="admin-department-action-buttons">
                                                <button className="admin-department-action-btn admin-department-edit-btn">
                                                    Edit
                                                </button>
                                                <button
                                                    className="admin-department-action-btn admin-department-edit-btn"
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

export default Department;
