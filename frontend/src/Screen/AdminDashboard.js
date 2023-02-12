import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("/api/users/users");
      setUser(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="table_name"> User List </div>
      <div style={{ height: "30px" }} />
      <table>
        <tr className="table_rows">
          <th style={{ width: "25%" }}>First Name</th>
          <th style={{ width: "25%" }}>Last Name</th>
          <th style={{ width: "25%" }}>Email Adrress</th>
          <th style={{ width: "25%" }}>Password</th>
        </tr>
        {User.length !==0 && User.allusers.map((user) => (
          <tr className="table_rows">
            <td style={{ width: "25%" }}>{user.firstname}</td>
            <td style={{ width: "25%" }}>{user.lastname}</td>
            <td style={{ width: "25%" }}>{user.email}</td>
            <td style={{ width: "25%" }}>{user.password}</td>
          </tr>
        ))}
      </table>
      <div style={{height: "200px"}}></div>
    </div>
  );
}
