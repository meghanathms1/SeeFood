import React from "react";
import CEO from "./Pages/ceo/ceo";
import Manager from "./Pages/manager/manager";
import Login from "./Pages/Login/login";
import Admin from "./Pages/admin/admin";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/ceo/*" element={<CEO />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/manager/*" element={<Manager />} />
                    <Route path="/admin/*" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
