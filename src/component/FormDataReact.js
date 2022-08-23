import React, { useState, useEffect } from "react";
import "./FormDataReact.css";
export default function FormDataReact(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      mobile,
      email,
    };
    props?.func(val);
    clearState();
  };
  const clearState = () => {
    setName("");
    setMobile("");
    setEmail("");
  };
  console.log("props", props);
  return (
    <div className="App">
      <div>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="/flower.jpg"
                className="w-100"
                style={{ height: "700px" }}
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <form style={{padding:"20px",margin:'0 auto',width:"80%",background:"white"}}>
                  <div className="mt-5 mb-5">Personel details</div>
                  <div>
                    <label>Email :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={email}
                      onChange={handleChangeEmail}
                      placeholder="Enter Email"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Phone :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={mobile}
                      onChange={handleChangeMobile}
                      placeholder="Enter Phone"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Name :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={name}
                      onChange={changeName}
                      placeholder="Enter name"
                    ></input>
                    </div>
                    <div className="mt-3">
          <button className="btn btn-primary" onClick={transferValue}> Submit</button>
          </div>
                  
                </form>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="/cloud.jpg"
                className="w-100"
                style={{ height: "700px" }}
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
              <form style={{padding:"20px",margin:'0 auto',width:"80%",background:"white"}}>
                  <div className="mt-5 mb-5">Personel details</div>
                  <div>
                    <label>Email :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={email}
                      onChange={handleChangeEmail}
                      placeholder="Enter Email"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Phone :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={mobile}
                      onChange={handleChangeMobile}
                      placeholder="Enter Phone"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Name :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={name}
                      onChange={changeName}
                      placeholder="Enter name"
                    ></input>
                    </div>
                    <div className="mt-3">
          <button className="btn btn-primary" onClick={transferValue}> Submit</button>
          </div>
                  
                </form>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="sun.jpg"
                className="w-100"
                style={{ height: "700px" }}
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
              <form style={{padding:"20px",margin:'0 auto',width:"80%",background:"white"}}>
                  <div className="mt-5 mb-5">Personel details</div>
                  <div>
                    <label>Email :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={email}
                      onChange={handleChangeEmail}
                      placeholder="Enter Email"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Phone :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={mobile}
                      onChange={handleChangeMobile}
                      placeholder="Enter Phone"
                    ></input>
                    </div>
                    <div className="mt-3">
                    <label>Name :</label>
                    <input style={{padding:'10px',borderRadius:"10px",width:"60%"}}
                      value={name}
                      onChange={changeName}
                      placeholder="Enter name"
                    ></input>
                    </div>
                    <div className="mt-3">
          <button className="btn btn-primary" onClick={transferValue}> Submit</button>
          </div>
                  
                </form>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
