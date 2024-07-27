
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import { Courses } from "./Courses/Courses";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}