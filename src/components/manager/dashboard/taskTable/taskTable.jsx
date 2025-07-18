import React from "react";
import "./taskTable.css";

const TaskTable = () => {
    return (
        <div className="manager-dashboard-task-table">
            <h3 className="manager-dashboard-table-title">Currently Assigned Tasks</h3>
            <div className="manager-dasboard-table-wrapper">
                <table className="manager-dasboard-task-table">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task Name</th>
                            <th>Assigned Date</th>
                            <th>Status</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-in-progress">
                                    In Progress
                                </span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-20</span>
                            </td>
                            <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-in-progress">
                                    In Progress
                                </span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-20</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>

                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-in-progress">
                                    In Progress
                                </span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-20</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-101</span>
                            </td>
                            <td>Inventory Audit</td>
                            <td>2024-07-01</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-in-progress">
                                    In Progress
                                </span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-20</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-onhold">On Hold</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>
                        <tr>
                            <td>
                                <span className="manager-dasboard-task-id">TSK-102</span>
                            </td>
                            <td>Staff Scheduling</td>
                            <td>2024-07-05</td>
                            <td>
                                <span className="manager-dasboard-status-badge manager-dasboard-pending">Pending</span>
                            </td>
                            <td>
                                <span className="manager-dasboard-deadline-badge">2024-07-18</span>
                            </td>
                             <td className="manager-dasboard-action-button"><button>More Details...</button></td>
                        </tr>

                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTable;
