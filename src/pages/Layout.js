import { Outlet, Link } from "react-router-dom";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col
      style={{ width: window.outerWidth, height: window.outerHeight }}
      className="font-face-gm"
    >
      <Col span={24} className="square-table">
        <Row className="top-row">
          <Row className="top-row-left-row">
            کاربر گرامی بعد از ورود به حساب کاربری خود، خواهید توانست از امکانات
            سیستم بهره‌مند شوید
            {"."}
          </Row>{" "}
          <Row>
            <InfoCircleOutlined className="top-row-icon" />
          </Row>
        </Row>

        <Col span={24}>
          <Form
            className="ant-form"
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="شماره موبایل"
              name="shomareMobile"
              rules={[
                {
                  max: 11,
                  min: 11,
                  required: true,
                  message: "لطفا شماره موبایل خود را وارد نمایید",
                },
              ]}
            >
              <Input className="input-ant" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 24,
              }}
            >
              <Button
                onClick={handleClick}
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                درخواست کد
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Col>
    </Col>
  );
};

export default Layout;
