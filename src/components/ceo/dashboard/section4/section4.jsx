import "./section4.css"
import DepartmentOverview from "./departmentOverviewTable/departmentOverview"
import OverDueTaskTable from "./currentTaskTable/currentTaskTable"
const section4 = () => {
  return (
    <div className="section4-container">
        <DepartmentOverview/>
        <OverDueTaskTable/>
    </div>
  )
}

export default section4