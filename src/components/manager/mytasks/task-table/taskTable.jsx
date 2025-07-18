import React from "react";
import "./taskTable.css";

const TaskTable = () => {
    return (
        <div className="manager-mytask-task-table-container">
            <h3 className="manager-mytask-table-title">My all Tasks</h3>
            <div className="manager-mytask-table-wrapper">
                <table className="manager-mytask-task-table">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task Name</th>
                            <th>Assigned Date</th>
                            <th>Status</th>
                            <th>Score</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-in-progress">In Progress</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-20</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-in-progress">In Progress</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-20</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">0</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">7</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-20</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">9</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">9</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">9</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-20</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">9</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-mytask-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-mytask-status-badge manager-mytask-completed">Completed</span>
                            </td>
                            <td>
                                <span className="manager-mytask-score">10</span>
                            </td>
                            <td>
                                <span className="manager-mytask-deadline-badge">2024-07-18</span>
                            </td>
                            <td className="manager-mytask-action-button">
                                <button>More Details...</button>
                            </td>
                        </tr>

                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTable;
