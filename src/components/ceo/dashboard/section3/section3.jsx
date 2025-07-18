import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BusinessIcon from '@mui/icons-material/Business';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './section3.css';

const StatisticsSection = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-header">
        {/* <h2 className="statistics-title">QUICK STATISTICS</h2> */}
      </div>
      
      <div className="statistics-grid">
 <div className="stat-card">
          <div className="stat-icon departments">
            <BusinessIcon />
          </div>
          <div className="stat-content">
            <p className="stat-label">Departments</p>
            <h3 className="stat-value">8</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon managers">
            <SupervisorAccountIcon />
          </div>
          <div className="stat-content">
            <p className="stat-label">Managers</p>
            <h3 className="stat-value">24</h3>
          </div>
        </div>

<div className="stat-card">
          <div className="stat-icon overdue-tasks">
            <ScheduleIcon />
          </div>
          <div className="stat-content">
            <p className="stat-label">Overdue Tasks</p>
            <h3 className="stat-value">15</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon total-tasks">
            <AssignmentIcon />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Tasks</p>
            <h3 className="stat-value">100</h3>
          </div>
        </div>

        

       
      </div>
    </div>
  );
};

export default StatisticsSection;