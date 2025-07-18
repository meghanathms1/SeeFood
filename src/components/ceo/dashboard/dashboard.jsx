import React from "react";
import "./dashboard.css";
import TopBar from "../topBar/topBar";
import Topcards from "./Topcards/topcards";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3"
import Section4 from "./section4/section4"
const main = () => {
    return (
        <div className="ceo-main-container">
            <TopBar title={"CEO Dashboard"}/>
            <div className="ceo-main">
                <Topcards />
                <Section2/>
                <Section3/>
                <Section4/>
            </div>
        </div>
    );
};

export default main;
