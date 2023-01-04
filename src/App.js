import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OtpFirstStep from "./pages/otplogin/OtpFirstStep";
import OtpSecondStep from "./pages/otplogin/OtpSecondStep";
import Home from './pages/dashboard/Home';

function App() {
  return (
    <div className="font-face-gm">
      <Router >
        <Routes>
          <Route exact path="/" element={<OtpFirstStep />} />
          <Route path="/verification" element={<OtpSecondStep />} />
          <Route path="/dashboard" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
