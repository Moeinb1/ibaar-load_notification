import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CustomButton from "app/components/template/CustomButton";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Error404 = () => {
  const router = useRouter();
  useEffect(() => {
    // router.push("/");
  }, []);
  return (
    <div className="bg-gradient-to-bl from-gray-400 to-sky-100 h-full rounded-2.5xl relative flex flex-col px-25 py-15 justify-center text-center overflow-hidden">
      <div class="lamp__wrap">
        <div class="lamp">
          <div class="cable"></div>
          <div class="cover"></div>
          <div class="in-cover">
            <div class="bulb"></div>
          </div>
          <div class="light"></div>
        </div>
      </div>

      <section class="error">
        <div class="error__content">
          <div class="error__message message">
            <h1 class="message__title">صفحه ی مورد نظر وجود ندارد</h1>
            <p class="message__text">
              با عرض پوزش صفحه ی مورد نظر وجود ندارم
              <br />
              درصورت ضرورت به نیاز حتما در اصرع وقت با پستیبانی تماس بگیرید
            </p>
          </div>
          <CustomButton
            className="mx-auto mt-8"
            text="بازگشت به صفحه ی قبل"
            icon={<ArrowLeftOutlined />}
            onClick={() => router.back()}
          />{" "}
        </div>
      </section>
    </div>
  );
};

export default Error404;
