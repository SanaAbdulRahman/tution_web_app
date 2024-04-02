import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/user/SignUp";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import Courses from "../pages/user/Courses";
import Tutor from "../pages/user/Tutor";
import About from "../pages/user/About";
import Profile from "../pages/user/Profile";
import Header from "../components/user/Header";

import Footer from "../components/user/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<Login />}></Route>
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
    </div>
  );
};

export default UserRouter;
