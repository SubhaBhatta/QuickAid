import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EmergencyPage from "./pages/EmergencyPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PropTypes from "prop-types";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
