import { Avatar, Button, Layout, Menu, Spin, theme } from "antd";

import React, { useEffect, useState } from "react";
import privateRoutesConfig from "app/app-config/private-routes-config";
import useHasUserPermission from "app/hooks/useHasUserPermission";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;

const PageWrapper = ({ children }) => {
  let router = useRouter();

  const { hasUserPermission } = useHasUserPermission();

  const menuToRender = () => {
    let arrayItem = [];
    privateRoutesConfig.map((item) => {
      if (hasUserPermission(item?.permission)) {
        arrayItem.push({
          key: item?.path,
          icon: "*",
          children: item?.children?.length
            ? item.children.map((child) => {
                if (hasUserPermission(child?.permission)) {
                  return {
                    key: child?.path,
                    label: child?.title,
                  };
                }
              })
            : null,
          label: item?.title,
          type: item?.type || null,
        });
      }
    });
    return arrayItem;
  };

  return (
    <Layout hasSider className="!min-h-screen flex">
      <Sider className="!min-h-screen fixed left-0 top-0 bottom-0 !overflow-x-hidden">
        <div className="!h-[32px] !my-4 ">
          <img
            src="/ibaar_Pay.svg"
            alt="ibaar_Pay_logo"
            className="w-[65%] mx-auto"
          />
        </div>
        <Menu
          onClick={(e) => {
            router.push(e.key);
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          className="flex flex-col gap-y-4"
          items={menuToRender()}
        />
      </Sider>
      <Layout className="site-layout flex-1 flex flex-col min-h-screen !h-screen">
        {/* <Header className="flex ">
          <div className="flex-1 flex ">
            <div className="mr-auto ">
              <Button
                className="mr-auto text-blue-200 ml-4"
                size="small"
                onClick={() => {}}
              >
                Change
              </Button>
              <Avatar shape="square" size="large" className="ml-4 bg-sky-500">
                {"user"}
              </Avatar>
            </div>
          </div>
        </Header> */}
        <main className="m-4 flex-1 overflow-y-scroll ">{children}</main>
      </Layout>
    </Layout>
  );
};

export default PageWrapper;
