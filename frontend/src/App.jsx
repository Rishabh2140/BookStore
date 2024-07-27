
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import { Courses } from "./Courses/Courses";
import Home from "./Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}