import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Courses from "./Components/Courses";
import Help from "./Components/Help";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element = {<Home/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
