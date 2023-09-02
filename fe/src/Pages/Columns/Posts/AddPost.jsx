import React from "react";

const Post = () => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Add Post</p>
            <div class="">
              <textarea
                className="form-control"
                placeholder="Whats On Your Mind Aryan ?"
              ></textarea>
              <button className="btn btn-primary my-3">Create Post</button>
            </div>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Post;
