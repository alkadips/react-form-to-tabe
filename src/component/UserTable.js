import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormDataReact from "./FormDataReact";
import "./UserTable.css";
import jsonData from './data.json';

export default function UserTable() {
    const [userData, setUserdata] = useState(jsonData);
  
    const tableRows = userData.map((info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.name}</td>
          <td>{info.mobile}</td>
          <td>{info.email}</td>
        </tr>
      );
    });
    
    const addRows = (data) => {
      const totaluserdata = userData.length;
      data.id = totaluserdata + 1;
      const updatedUserData = [...userData];
      updatedUserData.push(data);
      setUserdata(updatedUserData);
      updatedUserData.sort(data)

    };
  return (
    <div>
            <FormDataReact func={addRows} text="test"/>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )

}