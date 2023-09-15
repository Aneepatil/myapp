import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import BlogForm from "./components/BlogForm/BlogForm";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Blogs from "./components/Blogs/Blogs";
const App = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">e-BLOG</Link>
          <form className="d-flex">
            <div>
              <Link to={"/login-form"}>
                <button class="btn btn-outline-success m-2" type="submit">
                  Login
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/register-form"}>
                <button class="btn btn-outline-success m-2" type="submit">
                  Register
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/post-form"}>
                <button class="btn btn-outline-success m-2" type="submit">
                  Add Blog
                </button>
              </Link>
            </div>
          </form>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/register-form" element={<RegisterForm />} />
        <Route path="/post-form" element={<BlogForm />} />
      </Routes>
      {/* <Counter /> */}
    </div>
  );
};

export default App;
