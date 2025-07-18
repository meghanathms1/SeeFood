import "./managerView.css";
import TopBar from "../topBar/topBar";

const managerView = () => {
  const managers = [
    {
      id: "MGR-001",
      name: "Alice Johnson",
      department: "Design",
      completedTasks: 24,
      pendingTasks: 4,
      averageScore: 8.7,
      designation: "Senior Designer",
      email: "alice.johnson@example.com",
    },
    {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
        {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
        {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
        {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },
  {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Brian Smith",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },

      {
      id: "MGR-002",
      name: "Meghatahn",
      department: "IT",
      completedTasks: 30,
      pendingTasks: 2,
      averageScore: 9.2,
      
      designation: "Tech Lead",
      email: "brian.smith@example.com",
    },



  ];

  const getScoreClass = (score) => {
    if (score >= 9) return "manager-score-excellent";
    if (score >= 8) return "manager-score-good";
    if (score >= 7) return "manager-score-average";
    return "manager-score-poor";
  };

  return (
    <div className="manager-container">
      <TopBar title={"Manager Overview"}/>
      <div className="manager-wrapper">
        <div className="manager-table-container">
          <div className="manager-table-title-div">
             <h3 className="manager-table-title">All Managers</h3>
          </div>
         
          <div className="manager-table-wrapper">
            <table className="manager-table">
              <thead className="manager-table-header">
                <tr>
                  <th className="manager-th">ID</th>
                  <th className="manager-th">Name</th>
                  <th className="manager-th">Department</th>
                  <th className="manager-th">Completed</th>
                  <th className="manager-th">Pending</th>
                  <th className="manager-th">Avg. Score</th>
                  <th className="manager-th">Designation</th>
                  <th className="manager-th">Email</th>
                </tr>
              </thead>
              <tbody className="manager-table-body">
                {managers.map((manager) => (
                  <tr key={manager.id} className="manager-tr">
                    <td className="manager-td "><span className="manager-td-id">{manager.id}</span></td>
                    <td className="manager-td">{manager.name}</td>
                    <td className="manager-td">{manager.department}</td>
                    <td className="manager-td">{manager.completedTasks}</td>
                    <td className="manager-td">{manager.pendingTasks}</td>
                    <td className={`manager-td ${getScoreClass(manager.averageScore)}`}>
                      {manager.averageScore}
                    </td>
                    <td className="manager-td">{manager.designation}</td>
                    <td className="manager-td">{manager.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default managerView;
