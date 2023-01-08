import CustomInput from "app/components/template/CustomInput";
import { useFormik } from "formik";
import React from "react";
import { Checkbox } from "antd";
import CustomButton from "app/components/template/CustomButton";
import { useRouter } from "next/router";

const LoginForm = ({ setLoginStatus = () => {} }) => {
  const router = useRouter();
  let formik = useFormik({
    initialValues: {
      nationalCode: "",
      passCode: "",
    },
    onSubmit: (value) => {},
    validateOnChange: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomInput
        onChange={formik.handleChange}
        name="nationalCode"
        placeholder={"کد ملی"}
        title="کد ملی"
        value={formik.values.nationalCode}
        onReset={(name) => {
          formik.setFieldValue(name, "");
        }}
      />
      <CustomInput
        onChange={formik.handleChange}
        name="passCode"
        type={"password"}
        placeholder={"رمز عبور"}
        title="رمز عبور"
        value={formik.values.passCode}
        onReset={(name) => {
          formik.setFieldValue(name, "");
        }}
      />
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between ">
          <div className="my-auto flex justify-center text-center ">
            <Checkbox onChange={(e) => {}}>مرا به خاطر بسپار</Checkbox>
          </div>
          <h4
            className="text-sky-900 cursor-pointer"
            onClick={() => {
              setLoginStatus("forgetPassWord");
            }}
          >
            فراموشی رمز عبور ؟
          </h4>
        </div>
        <CustomButton
          text="ورود"
          onClick={() => {
            localStorage.setItem("token", "sdasddadadadsasd");
            router.push("/");
          }}
        />
      </div>
    </form>
  );
};

export default LoginForm;
