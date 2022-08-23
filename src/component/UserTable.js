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
          <td>{info.selectedCity}</td>
          <td>{info.mobile}</td>
          <td>{info.dob}</td>
          <td>{info.govidType}</td>
          <td>{info.country}</td>
          <td>{info.pincode}</td>
          <td>{info.religen}</td>
          <td>{info.nationality}</td>
          <td>{info.occupation}</td>
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
    };
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
            <th>Mobile</th>

            <th>DOB</th>
            <th>GovernmentType Id</th>
            <th>Country</th>
<th>Pincode</th>
<th>Religion</th>
<th>Nationality</th>
            <th>Occupation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <FormDataReact func={addRows} text="test"/>
    </div>
  )

}