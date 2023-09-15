import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <Blog/>
      </div>
    </>
  );
};

export default Blogs;
