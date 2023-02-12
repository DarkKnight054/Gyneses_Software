import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import LogInScreen from "./Screen/LogInScreen";
import SignUpScreen from "./Screen/SignUpScreen";
import AdminDashboard from "./Screen/AdminDashboard";
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="APP">
        <div style={{ display: "flex" }}>
          <h1 className="app-name">Dokan</h1>
          <div className="topper">
            <a href="/About" className="topper1">
              {" "}
              About{" "}
            </a>
            <a href="/Shop" className="topper1">
              {" "}
              Shop{" "}
            </a>
            <a href="/Subscriber_Save" className="topper1">
              {" "}
              Subscriber & Save{" "}
            </a>
            <a href="/Bundle" className="topper1">
              {" "}
              Bundle{" "}
            </a>
            <a href="/Recipies" className="topper1">
              {" "}
              Recipies{" "}
            </a>
            <a href="/Find" className="topper1">
              {" "}
              Find{" "}
            </a>
            <a href="/More" className="topper1">
              {" "}
              More{" "}
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<LogInScreen />} />
          <Route path="/signup" element={<SignUpScreen/>} />
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </div>
      <div style={{ height: "100px" }}></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
