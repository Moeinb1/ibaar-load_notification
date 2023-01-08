import CustomButton from "app/components/template/CustomButton";
import CustomInput from "app/components/template/CustomInput";
import { useFormik } from "formik";
import React from "react";
import {
  InfoCircleOutlined
} from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';

const EntryForgetPassword = ({ setStep }) => {
  let formik = useFormik({
    initialValues: {
      nationalCode: "",
      passCode: "",
    },
    onSubmit: (value) => { },
    validateOnChange: true,
  });

  return (

    <div className="relative w-[900px] border-[3px] border-customPurple from-slate-900 rounded-lg  h-[550px]">
      <div className="flex-1 flex items-center justify-center  rounded-l-lg ">
        <form onSubmit={formik.handleSubmit} className='mt-8 '>
          <Row className="mb-28">
            <Col className="w-max   m-auto  " >
              <Row className=" w-[860px] border-[1px] border-lightGray shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-xl	 h-20.5">
                <Col className="mt-6 ml-10 mr-10">
                  <InfoCircleOutlined style={{ fontSize: 30 }} />
                </Col>
                <Col className="mt-6 font-sans text-lg font-medium">
                  <Typography>کاربر گرامی بعد از ورود به حساب کارری خود، خواهید توانست از امکانات سیستم بهره‌مند شوید</Typography>
                </Col>
              </Row>
            </Col>
          </Row>

          <Col offset={3}>
            <CustomInput className='h-20 w-160  '
              onChange={formik.handleChange}
              name="passCode"
              title='شماره موبایل'
              type={"number"}
              value={formik.values.passCode}
              onReset={(name) => {
                formik.setFieldValue(name, "");
              }}
            />
          </Col>

          <Col offset={6} className='mt-20'>

            <div className="flex flex-col gap-y-8">
              <CustomButton className='w-105 h-20 text-xl font-normal	 '
                text="درخواست کد"
                onClick={() => {
                  setStep((prev) => prev + 1);
                }}
              />
            </div></Col>


        </form>
      </div>
    </div>

  );
};

export default EntryForgetPassword;
