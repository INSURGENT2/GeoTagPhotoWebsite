// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import the context
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./routes/Sidebar.jsx";
import Home from "./routes/Home";
import Login from "./routes/Login";
import UploadImg from "./routes/UploadImg.jsx";
import Listimage from "./routes/Listimage.jsx";

function App() {
  const location = useLocation();

  // Conditionally show sidebar based on the path
  const showSidebar =
    location.pathname !== "/" && location.pathname !== "/login";

  return (
    <div>
      <Navbar />
      <div className="app-container">
        {showSidebar && <Sidebar />}
        <div className={showSidebar ? "content" : "full-width-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/uploadimg" element={<UploadImg />} />
            <Route path="/listimages" element={<Listimage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <AuthProvider> {/* Wrap the App with AuthProvider */}
        <App />
      </AuthProvider>
    </Router>
  );
}
