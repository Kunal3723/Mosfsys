import React from 'react'
import '../styles/loginstyle.css'
function Login() {
  return (
   
     <div id="container">
      <div id="row">
        <div id="col-1">
          <img src={require("../images/Group2.png")} alt="" id="logo" />
          <div id="head">Create school account</div>
          <div id="form">
              <h2 id="h2">Welcome to Globiliti!</h2>
              <div id="sub-head">Create your school account</div>
            <div id="name_en">
              <label id="label-name" htmlFor="name"
                >What’s your full name?</label
              >
              <input id="name" type="text" />
            </div>
            <div id="name_en">
              <label id="label-name" htmlFor="name"
                >Email</label
              >
              <input id="name" type="email" />
            </div>
            <div id="name_en">
              <label id="label-name" htmlFor="name"
                >Password</label
              >
              <input className="name" type="password" name="password" autoComplete="current-password" required="" id="id_password"/>
             
              <span id="span">Password must be 8 characters or longer.</span>
            </div>
            <button style={{cursor: "pointer"}} id="button">Create account</button>
          </div>
        </div>
        <div id="col-2">
          <img id="img-1" src={require("../images/Iphone Xs-Artwork-07.png")} alt="" />
          <img id="img-2" src={require("../images/Group 204.png")} alt="" />
          <img id="img-3" src={require("../images/Group 202.png")} alt="" />
        </div>
      </div>
    </div>
  
  )
}

export default Login