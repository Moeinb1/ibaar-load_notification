import { Layout } from "antd";
import Head from "app/components/head";
import Nav from "app/components/nav";
import React, { memo } from "react";

const Home = () => {
  return (
    <>
      <Layout>
        <Head />
        <Nav />
      </Layout>
    </>
  );
};
export default memo(Home);
