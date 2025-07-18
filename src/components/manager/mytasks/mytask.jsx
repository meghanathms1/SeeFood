import React from "react";
import "./mytask.css";
import TopBar from "../topBar/topBar";
// import Topcards from "./Topcards/topcards";
import TaskTable from "../mytasks/task-table/taskTable"
const main = () => {
    return (
        <div className="manager-main-container">
            <TopBar title={"Tasks"} name={"Meghanath"}/>
            <div className="manager-main">
              
              <TaskTable/>
            </div>
        </div>
    );
};

export default main;
