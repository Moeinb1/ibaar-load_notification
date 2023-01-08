import { Checkbox, message, Col, Row } from "antd";
import CustomButton from "app/components/template/CustomButton";
import CustomInput from "app/components/template/CustomInput";
import { useFormik } from "formik";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";

const EntryNewPassword = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "کد تایید به شماره همراه شما ارسال شد.",
    });
  };
  useEffect(() => {
    success();
  }, []);
  let formik = useFormik({
    initialValues: {
      otp: "",
      newPass: "",
      reEnterNewPass: "",
    },
    onSubmit: (value) => { },
    validateOnChange: true,
  });

  const [count, setCount] = useState(120);
  const [isTimeDone, setIsTimeDone] = useState(false);

  let countDownInterval;
  useEffect(() => {
    countDownInterval = setInterval(() => {
      setCount((prev) => {
        if (prev == 0) {
          setIsTimeDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isTimeDone) {
      clearInterval(countDownInterval);
    }
  }, [isTimeDone]);

  return (
    <div className="relative w-[900px] border-[3px] border-customPurple from-slate-900 rounded-lg  h-[550px]">
      <form onSubmit={formik.handleSubmit} className='mt-56 '>
        {contextHolder}
        <Col offset={3}>
          <CustomInput className='h-20 w-160  '
            onChange={formik.handleChange}
            name="otp"
            title=' رمز یکبار مصرف'
            type={"number"}
            value={formik.values.otp}
            onReset={(name) => {
              formik.setFieldValue(name, "");
            }}
          />
        </Col>
        <Col offset={6} className='mt-20' span={24}>
          <Row className="flex  gap-x-8  ">
            <CustomButton className='w-52 h-20 text-xl font-normal '
              text="تایید"
              onClick={() => {
                localStorage.setItem("token", "sdasddadadadsasd");
                router.push("/");
              }}
            />
            <CustomButton className='w-52 h-20 text-xl font-normal	 '
              text="ارسال مجدد"
              onClick={() => {

              }}
            />
          </Row>
        </Col>
      </form>
    </div>






  );
};

export default EntryNewPassword;
