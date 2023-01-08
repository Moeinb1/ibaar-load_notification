import { ConfigProvider } from "antd";
import "../app/styles/index.css";
import frIR from "antd/lib/locale/fa_IR";
import AppWrapper from "app/components/layout/wrappers/AppWrapper";
import Head from "next/head";
import { PublicLoader } from "app/app-config/axios-config/loader";
import { Provider } from "react-redux";

import { store } from "app/state-managment/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Provider store={store}>
        <ConfigProvider locale={frIR} direction="rtl">
          <PublicLoader />
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default MyApp;
