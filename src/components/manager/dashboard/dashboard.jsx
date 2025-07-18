import React from "react";
import "./dashboard.css";
import TopBar from "../topBar/topBar";
import Topcards from "./Topcards/topcards";
import TaskTable from "./taskTable/taskTable"
const main = () => {
    return (
        <div className="manager-main-container">
            <TopBar title={"Manager Dashboard"} name={"Meghanath"}/>
            <div className="manager-main">
                <Topcards />
              <TaskTable/>
            </div>
        </div>
    );
};

export default main;
