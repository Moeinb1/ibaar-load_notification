import React from "react";
import CustomButton from "app/components/template/CustomButton";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Router, useRouter } from "next/router";

const PermissionDenied = () => {
  let router = useRouter();
  return (
    <div className="wrapper-class bg-gradient-to-bl from-gray-400 to-sky-100 flex flex-col justify-center items-center ">
      <img
        src="/image/permission-denied.svg"
        alt=""
        className="w-[40rem] mx-auto"
      />
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h2 className="text-blue-900 font-bold">
          شما دسترسی لازم برای دیدن این صحفه را ندارید
        </h2>
        <h3 className="text-blue-700 font-bold">
          لطفا پس از هماهنگی با مدیر مربوطه مجدد امتحان کنید
        </h3>
        <CustomButton
          text="بازگشت به صفحه ی قبل"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.back()}
        />
      </div>
    </div>
  );
};

export default PermissionDenied;
