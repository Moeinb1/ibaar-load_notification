import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Otptimer } from "otp-timer-ts";
import { useForm } from "antd/es/form/Form";


import './OtpSecondStep.css'

const OtpSecondStep = () => {

  const handleResend = () => {
    //desired function to be performed on clicking resend button
  }
  const [form] = useForm();

  const navigate = useNavigate();
  const handleClick = () => navigate("/dashboard");


  return (
    <Col
      style={{ width: window.outerWidth, height: window.outerHeight }}

    >
      <Col span={24} className="square-table-2">

        <Col span={24}>

          <Form
            form={form}
            className="ant-form-2"
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

            autoComplete="off"
          >
            <Form.Item
              className="otp"
              label="رمز یکبار مصرف"
              name="Otp"
              rules={[
                {
                  max: 6,
                  min: 6,
                  required: true,
                  message: "رمز وارد شده اشتباه است",
                },
              ]}
            >
              <Input className="input-ant-2" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 3,
                span: 24,
              }}
            >
              <Row  >
                <Col span={12}>    <Button
                  onClick={() => {
                    handleClick()
                    console.log(form.getFieldValue('Otp'), "shsjshjshjs")
                  }}
                  type="primary"
                  htmlType="submit"
                  className="submit-button-2"
                >
                  ورود
                </Button></Col>
                <Col span={12}>
                  <Otptimer minutes={0} seconds={1} onResend={handleResend} buttonText='درخواست مجدد' timerStyle={{
                    fontSize: 24, position: 'absolute',
                    zIndex: 1, marginTop: -80, marginInlineStart: 210, opacity: 0.8
                  }}

                    text={<div style={{
                      fontSize: 24, position: 'absolute',
                      zIndex: 1, marginTop: -80, marginInlineStart: 170
                    }}><ClockCircleOutlined style={{ color: '#2D264B' }} />
                    </div>}
                    buttonStyle={{
                      width: 210,
                      height: 80,
                      background: '#FFF',
                      borderRadius: 10,
                      marginTop: 82,
                      type: 'primary',
                      color: 'black',
                      fontWeight: 500,
                      fontSize: 24,
                      border: '2px solid #5050EB',
                      borderRadius: 10,
                      fontFamily: 'IRANSans Medium'

                    }} /></Col>
              </Row>

            </Form.Item>
          </Form>
        </Col>
      </Col>
    </Col>
  );
};

export default OtpSecondStep;
