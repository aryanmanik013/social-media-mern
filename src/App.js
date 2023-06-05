import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import Login from './Pages/Login'
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
