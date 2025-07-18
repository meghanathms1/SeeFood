import React from "react";
import "./performance.css";
import TopBar from "../topBar/topBar";
import Section1 from "./section1/section"
import Section2 from "./section2/graph";
const main = () => {
    return (
        <div className="manager-performance-container">
            <TopBar title={"Performance"} name={"Meghanath"}/>
            <div className="manager-performance">
              
             <Section1/>
             <Section2/>
            </div>
        </div>
    );
};

export default main;
