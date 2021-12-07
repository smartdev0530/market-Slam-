import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import logo from "../assets/img/Slam.png";
import sm_bg from "../assets/img/smbg.png";
import login_image from "../assets/img/login.png";
import "../assets/styles/login.scss";
import metaIcon from '../assets/img/metawallet.svg'
function Login({ ...props }) {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};
  const registerAction = () => {
    props.history.push("/register");
  };
  const Login = () => {
    props.history.push("./category");
  };
  return (
    <div className="login-container" style={{overflow: "hidden"}}>
      <div className="small-back">
        <img src={sm_bg} />
      </div>
      <div className="container-left">
        <div>
          <img src={logo} className="logo" />
        </div>
        <div className="login-text Sp36 SPFontB">Log in</div>
        <div className="sm-text Inter18 font-grey-light sm-Inter9">
          Log in with your data that you entered during yourc registration.
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input size="large" placeholder="Enteryour email " />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                min: 8,
                message: "Use 8 characters or more for your password",
              },
            ]}
          >
            <Input.Password placeholder="At least 8 characters" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox />{" "}
            <span className="ml-10 Inter18 sm-Inter9">Keep me logged in</span>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ background: "#216AF5" }}
              onClick={Login}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="Inter18 text-center mt-20 sm-Inter9">
          Don’t have an acoount yet?
          <span className="font-blue" onClick={registerAction}>
            {" "}
            Register
          </span>
        </div>
        <div className="Inter18 font-blue text-center mt-10 sm-Inter9 mtsm5">
          Forgot Password?
        </div>
      </div>

      <div className="w-50">
        <img src={login_image} className="login-back" />
      </div>
    </div>
  );
}

export default Login;
