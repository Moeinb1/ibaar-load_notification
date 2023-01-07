import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/IRANSans Medium.ttf";
import { ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ConfigProvider direction="rtl">
        <App />
    </ConfigProvider>
);
reportWebVitals();
