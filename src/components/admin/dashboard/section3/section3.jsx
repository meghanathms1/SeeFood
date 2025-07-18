import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BusinessIcon from '@mui/icons-material/Business';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './section3.css';

const StatisticsSection = () => {
  return (
    <div className="admin-statistics-container">
      <div className="admin-statistics-header">
        {/* <h2 className="statistics-title">QUICK STATISTICS</h2> */}
      </div>
      
      <div className="admin-statistics-grid">
 <div className="admin-stat-card">
          <div className="admin-stat-icon departments">
            <BusinessIcon />
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Departments</p>
            <h3 className="admin-stat-value">8</h3>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon managers">
            <SupervisorAccountIcon />
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Managers</p>
            <h3 className="admin-stat-value">24</h3>
          </div>
        </div>

<div className="admin-stat-card">
          <div className="admin-stat-icon overdue-tasks">
            <ScheduleIcon />
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Overdue Tasks</p>
            <h3 className="admin-stat-value">15</h3>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon total-tasks">
            <AssignmentIcon />
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Total Tasks</p>
            <h3 className="admin-stat-value">100</h3>
          </div>
        </div>

        

       
      </div>
    </div>
  );
};

export default StatisticsSection;