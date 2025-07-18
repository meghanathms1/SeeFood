import React from 'react'
import "./admin.css"
import Dashboard from "../../components/admin/dashboard/dashboard"
import AssignedTasks from "../../components/admin/assignedTask/task"
import SideBar from '../../components/admin/sidebar/sideBar'
import NewTask from "../../components/admin/newTask/task"
import Managers from "../../components/admin/managerView/managerView"
import Departments from  "../../components/admin/department/department"
import { Routes, Route } from "react-router";
const admin = () => {
  return (
    <>
    <SideBar/>
    <SideBar />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="assigned-tasks" element={<AssignedTasks />} />
                <Route path="new-task" element={<NewTask />} />
                  <Route path="managers" element={<Managers />} />
                  <Route path="departments" element={<Departments />} />
            </Routes>

    </>
  )
}

export default admin