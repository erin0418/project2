import React from "react";

const UpdateAccount = props => (
    
  <div className="col sm6">
  <h4 className="center white-text">Update your Account Info</h4>
    <br/>
    <div className="input-field">
    <input name="email" type="text" onChange={props.handleInput} />
    <label for="email" className="white-text" id ="p1">Email</label>
    </div>
    <div className="input-field">
    <input name="fullname" type="text" onChange={props.handleInput} />
    <label for="fullname" className="white-text" id ="p1">Full Name</label>
    </div>
    <div className="input-field">
    <input name="username" type="text" onChange={props.handleInput} />
    <label for="username" className="white-text" id ="p1">Username</label>
    </div>
    <div className="input-field">
    <input name="password" type="text" onChange={props.handleInput} />
    <label for="password" className="white-text" id ="p1">Password</label>
    </div>
    <button class="submit btn amber lighten-5 waves-effect waves-orange"  onClick={props.handleAccountChange}>
      Create Post 
    </button>
    <div>{props.completeMessageAccount}</div>
  </div>
);

export default UpdateAccount;