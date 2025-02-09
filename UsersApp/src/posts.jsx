import { useState, useEffect } from "react";

function PostsComp({ post }) {
  return (
    <>
      <div style={{ border: `1px solid purple`, width: "100%" }}>
        <u>Title</u>: {post.title} <br />
        <u>Body</u>: {post.body}
      </div>
    </>
  );
}

export default PostsComp;
