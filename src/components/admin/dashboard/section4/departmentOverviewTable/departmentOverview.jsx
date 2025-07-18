import React from "react";
import "./departmentOverview.css";

const DepartmentOverview = () => {
    return (
        <div className="admin-department-overview-container">
            <h3>Top Performing Departments</h3>
            <div className="admin-table-container">
                <table className="admin-department-performance-table">
                    <thead>
                        <tr>
                            <th className="admin-table-header">Departments</th>
                            <th className="admin-table-header">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Quality Control</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">1</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Processing</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">7</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Packaging</td>
                            <td className="score-cell">
                                <span className="score-badge">8</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Logistics</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">5</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Cold Storage</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">1</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Sales</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">5</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Administration</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">7</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Maintenance</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">4</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Research & Development</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">9</span>
                            </td>
                        </tr>
                        <tr className="admin-table-row">
                            <td className="admin-department-name">Customer Service</td>
                            <td className="admin-score-cell">
                                <span className="admin-score-badge">6</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepartmentOverview;