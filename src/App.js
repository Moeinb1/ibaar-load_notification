import "./App.css";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
