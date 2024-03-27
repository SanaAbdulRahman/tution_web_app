import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Courses from "./pages/Courses";
import Tutor from "./pages/Tutor";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/tutors" element={<Tutor />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
