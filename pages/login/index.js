import { Button, Checkbox, Layout, Row, Typography, Col } from "antd";
import ForgetPassWord from "app/components/layout/login/forgetPassword";
import LoginForm from "app/components/layout/login/LoginForm";
import React, { useState } from "react";


const login = () => {
  const [loginStatus, setLoginStatus] = useState("login");
  return (
    <Layout className="  flex items-center justify-center h-screen w-full">
      <Col span={24} className='mt-96' offset={1} >
        <ForgetPassWord setLoginStatus={setLoginStatus} />
      </Col>
    </Layout>
  );
};

export default login;
