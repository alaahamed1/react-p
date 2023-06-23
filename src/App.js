import React, { Component } from "react";
import "../src/style.css";
import ImageUpload from "./component/ImageUpload";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    // إرسال البيانات إلى الـ API باستخدام طلب POST
    axios
      .post("https://webhook.site/49f27282-54cd-4ce1-9414-998dd3deb0af", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  click = () => {
    let form = document.getElementById("form");
    form.style.display = "block";
  };
  close = () => {
    let form = document.getElementById("form");
    form.style.display = "none";
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <>
        <div className="mainImg">
          <div className="overLay"></div>
          <div className="welcomeText">
            <h1>Hello ,,</h1>
            <p>If You Are a New User, Please Fill The Form To Get Our Services</p>
            <button className="bn9" id="click" onClick={this.click}>
              <span>Fill The Form</span>
            </button>
          </div>
        </div>
        <div className="form" id="form">
          <div className="form_content position-absolute top-50 start-50 translate-middle">
            <h2 className="mb-2">Sign Up!</h2>
            <div className="input-group mb-3">
              <span className="input-group-text">First and last Name</span>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                aria-label="First name"
                className="form-control"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                aria-label="Last name"
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label >Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={this.handleChange}
                placeholder="Password"
              />
              <label >Password</label>
            </div>
            <ImageUpload />
            <button className="btn btn-outline-success m-3"onClick={this.handleSubmit}>submit</button>
            <button className="btn btn-outline-danger m-3" onClick={this.close}>cancel</button>
          </div>
        </div>
      </>
    );
  }
}

