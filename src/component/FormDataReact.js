import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormDataReact.css";
import UserTable from "./UserTable";
export default function FormDataReact(props) {
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");
  const [religen, setReligen] = useState([]);
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [maritals, setMarital] = useState([]);
  const [blodg, setBlodG] = useState("");
  const [govid, setGoveId] = useState("");
  const [govidType, setGoveIdType] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [guardianDetails, setGuardian] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleChangeDob = (event) => {
    setDob(event.target.value);
  };
  const handleChangeGovId = (event) => {
    setGoveId(event.target.value);
  };
  const handleChangeGovIdType = (event) => {
    setGoveIdType(event.target.value);
  };
  const handleChangeoccupation = (event) => {
    setOccupation(event.target.value);
  };
  const handleChangeReligen = (event) => {
    setReligen(event.target.value);
  };
  const handleChanePincode = (event) => {
    setPincode(event.target.value);
  };
 
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeMarital = (event) => {
    setMarital(event.target.value);
  };
  const handleChaneBlodG = (event) => {
    setBlodG(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeNationalty = (event) => {
    setNationality(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      mobile,
      dob,
      govid,
      govidType,
      email,
      selectedCity,
      country,
      pincode,
      occupation,
      religen,
      maritals,
      nationality,
      guardianDetails,
    };
    props?.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setSelectedCity("");
    setReligen("");

  };

  console.log("props", props);
  return (
    <div className="App">
      <div>
        <form>
          <label>Name</label>
          <input type="text" value={name} onChange={changeName} />
          <label>City</label>
          <select value={selectedCity} onChange={handleChangeCity}>
            <option defuavalue="pune"></option>
            <option defuavalue="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="lonawala">Lonawala</option>
          </select>
          <label>Mobile</label>
          <input type="text" value={mobile} onChange={handleChangeMobile} />
          <div className="row mt-5">
            <div className="col-md-6">
              <label>Date of birth: </label>

              <input
                value={dob}
                type="date"
                placeholder="Enter Date Of Birth"
                onChange={handleChangeDob}
              />
              <div className="mt-5">
                <label htmlFor="">Country: </label>
                <input
                  value={country}
                  onChange={handleChangeCountry}
                  type="text"
                  placeholder="Enter Country"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="">Religion: </label>

                <select value={religen} onChange={handleChangeReligen}>
                <option defuavalue="hindu"></option>

                  <option defuavalue="pune">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="shikh">Shikh</option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="">Nationality: </label>
                <input
                  value={nationality}
                  type="text"
                  onChange={handleChangeNationalty}
                  placeholder="Enter Nationality"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="">Email: </label>
                <input
                  value={email}
                  type="text"
                  onChange={handleChangeEmail}
                  placeholder="Enter Nationality"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="">Govt issued id: </label>
              </div>
              <div>
                <select value={govidType} onChange={handleChangeGovIdType}>
                <option defuavalue="Aadhar"></option>

                  <option value="Aadhar">Aadhar</option>
                  <option value="pan">Pan</option>
                  <option value="otting">Otting</option>
                </select>
                <input
                  value={govid}
                  onChange={handleChangeGovId}
                  type="text"
                  placeholder="Enter govt Id"
                />
              </div>
              <label className="mt-5" htmlFor="">
                Pincode:{" "}
              </label>
              <input
                value={pincode}
                onChange={handleChanePincode}
                type="text"
                placeholder="Enter Pincode"
              />
              <div>
                {" "}
                {/* <label className="mt-5" htmlFor="">
                  Marital status:{" "}
                </label>
                <select value={maritals} onChange={handleChangeMarital}>
                <option defuavalue="married"></option>

                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                  <option value="other">Other</option>
                </select> */}
                <div className="mt-5">
                  <label className="mt-5" htmlFor="">
                    Occupation:{" "}
                  </label>

                  <input
                    value={occupation}
                    onChange={handleChangeoccupation}
                    type="text"
                    placeholder="Enter occupation"
                  />
                </div>
              </div>
            </div>
          </div>

          <button onClick={transferValue}> Submit</button>
        </form>
      </div>
    </div>
  );
}
