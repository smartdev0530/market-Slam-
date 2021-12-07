import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import logo from "../assets/img/Slam.png";
import sm_bg from "../assets/img/smbg.png";
import login_image from "../assets/img/login.png";
import "../assets/styles/login.scss";

function Register({ ...props }) {
  const [count, setCount] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {};
  const goLogin = () => {
    props.history.push("./login");
  };
  return (
    <div className="register-container ">
      <div className="small-back">
        <img src={sm_bg} />
      </div>
      <div className="container-left">
        <div>
          <img src={logo} className="logo" />
        </div>

        <div className="login-text Sp36 SPFontB">Registration</div>

        <div className="sm-text Inter18 font-grey-light sm-Inter9">
          Type in your email and pasword to get access to <span className="font-blue">Slamcoin</span>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="d-flex flex-row w-100 justify-content-between">
            <div style={{ width: "48%" }}>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    type: "string",
                    min: 3,
                    message: "Use 3 characters or more for your first name",
                  },
                ]}
              >
                <Input size="small" placeholder="Your Name" />
              </Form.Item>
            </div>
            <div style={{ width: "48%" }}>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    type: "string",
                    min: 3,
                    message: "Use 3 characters or more for your last name",
                  },
                ]}
              >
                <Input  placeholder="Your Surname" />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="name"
            rules={[
              {
                type: "string",
                min: 3,
                message: "Use 3 characters or more for your name",
              },
            ]}
          >
            <Input  placeholder="Milano" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Please input your phone",
              },
            ]}
          >
            <Input placeholder="Your Phone" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                type: "number",
                message: "Please input your phone",
              },
            ]}
          >
            <Input size="small" placeholder="Your Phone" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                min: 8,
                message: "Use 8 characters or more for your password",
              },
            ]}
          >
            <Input.Password size="small" placeholder="Your Password" />
          </Form.Item>
          <Form.Item
            name="repeat-password"
            rules={[
              {
                min: 8,
                message: "Use 8 characters or more for your password",
              },
            ]}
          >
            <Input.Password size="small" placeholder="Repeat Your Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              size="small"
              htmlType="submit"
              style={{ background: "#216AF5" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <p className="Inter18 text-center mt-20 sm-Inter9">
          Already have an account?
          <span className="font-blue" onClick={goLogin}>
            Log in
          </span>
        </p>
      </div>
      <div className="w-50">
        <img src={login_image} className="login-back" />
      </div>
    </div>
  );
}

export default Register;
