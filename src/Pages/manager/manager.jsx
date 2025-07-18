import React from "react";
import "./manager.css";
import TopBar from "../../components/manager/topBar/topBar";
import SideBar from "../../components/manager/sidebar/sideBar";
import Dashboard from "../../components/manager/dashboard/dashboard";
import Mytask from "../../components/manager/mytasks/mytask";
import Performance from "../../components/manager/Performance/performance";
import { Routes, Route } from "react-router";
const manager = () => {
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="tasks" element={<Mytask/>} />
                <Route path="performance" element={<Performance />} />
            </Routes>
        </>
    );
};

export default manager;
