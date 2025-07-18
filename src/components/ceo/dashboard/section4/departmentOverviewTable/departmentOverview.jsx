import React from "react";
import "./departmentOverview.css";

const DepartmentOverview = () => {
    return (
        <div className="department-overview-container">
            <h3>Top Performing Departments</h3>
            <div className="table-container">
                <table className="department-performance-table">
                    <thead>
                        <tr>
                            <th className="table-header">Departments</th>
                            <th className="table-header">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td className="department-name">Quality Control</td>
                            <td className="score-cell">
                                <span className="score-badge">1</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Processing</td>
                            <td className="score-cell">
                                <span className="score-badge">7</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Packaging</td>
                            <td className="score-cell">
                                <span className="score-badge">8</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Logistics</td>
                            <td className="score-cell">
                                <span className="score-badge">5</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Cold Storage</td>
                            <td className="score-cell">
                                <span className="score-badge">1</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Sales</td>
                            <td className="score-cell">
                                <span className="score-badge">5</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Administration</td>
                            <td className="score-cell">
                                <span className="score-badge">7</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Maintenance</td>
                            <td className="score-cell">
                                <span className="score-badge">4</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Research & Development</td>
                            <td className="score-cell">
                                <span className="score-badge">9</span>
                            </td>
                        </tr>
                        <tr className="table-row">
                            <td className="department-name">Customer Service</td>
                            <td className="score-cell">
                                <span className="score-badge">6</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepartmentOverview;