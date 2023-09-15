import React from "react";

const PostForm = () => {
  return (
    <div className="container">
      <h1>Add New Post</h1>
      <form>
        <div className="mb-3">
        <div className="form-floating">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></input>
            <label for="floatingTextarea">Title</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Description</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
