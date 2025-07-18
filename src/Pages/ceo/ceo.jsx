import SideBar from "../../components/ceo/sidebar/sideBar";
import Main from "../../components/ceo/dashboard/dashboard";
import Task from "../../components/ceo/task/task";
import Managers from "../../components/ceo/managerView/managerView";
import { Routes, Route } from "react-router";
const ceo = () => {
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="dashboard" element={<Main />} />
                <Route path="tasks" element={<Task />} />
                <Route path="managers" element={<Managers />} />
            </Routes>
        </>
    );
};

export default ceo;
