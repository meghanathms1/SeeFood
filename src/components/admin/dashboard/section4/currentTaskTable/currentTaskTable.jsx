import React from 'react';
import "./currentTaskTable.css";

const overDueTask = () => {
    return (
        <div className='admin-overdue-task-container'>
            <h3>Currently Running Tasks</h3>
            <div className="admin-table-wrapper">
                <table className="admin-running-tasks-table">
                    <thead>
                        <tr>
                            <th className="admin-running-tasks-table-heading">Task ID</th>
                            <th className="admin-running-tasks-table-heading">Task Name</th>
                            <th className="admin-running-tasks-table-heading">Created Date</th>
                            <th className="admin-running-tasks-table-heading">Approved Date</th>
                            <th className="admin-running-tasks-table-heading">Status</th>
                            <th className="admin-running-tasks-table-heading">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-001</span>
                            </td>
                            <td>Quality Inspection - Batch A</td>
                            <td>2024-07-05</td>
                            <td>2024-07-06</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge in-progress">In Progress</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-15</span>
                            </td>
                        </tr>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-002</span>
                            </td>
                            <td>Package Processing - Order #1234</td>
                            <td>2024-07-03</td>
                            <td>2024-07-04</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge pending">Pending</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-12</span>
                            </td>
                        </tr>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-003</span>
                            </td>
                            <td>Cold Storage Maintenance</td>
                            <td>2024-07-01</td>
                            <td>2024-07-02</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge in-progress">In Progress</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-20</span>
                            </td>
                        </tr>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-004</span>
                            </td>
                            <td>Logistics Coordination - Route B</td>
                            <td>2024-07-08</td>
                            <td>2024-07-09</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge on-hold">On Hold</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-18</span>
                            </td>
                        </tr>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-005</span>
                            </td>
                            <td>R&D Product Testing</td>
                            <td>2024-06-28</td>
                            <td>2024-06-30</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge in-progress">In Progress</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-25</span>
                            </td>
                        </tr>
                        <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-006</span>
                            </td>
                            <td>Customer Service Training</td>
                            <td>2024-07-02</td>
                            <td>2024-07-03</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge pending">Pending</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-16</span>
                            </td>
                        </tr>
                          <tr className="admin-running-tasks-table-body-row">
                            <td className="admin-task-id">
                                <span>TSK-006</span>
                            </td>
                            <td>Customer Service Training</td>
                            <td>2024-07-02</td>
                            <td>2024-07-03</td>
                            <td className="admin-status-cell">
                                <span className="admin-status-badge pending">Pending</span>
                            </td>
                            <td className="admin-deadline-cell">
                                <span className="admin-deadline-badge">2024-07-16</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default overDueTask;