import React from "react";
import "./BlogsDelete.css";
import BlogsCard from "../../components/BlogsCard/BlogsCard";

function BlogsDelete() {
  return (
    <div className="blogsdelete">
      <BlogsCard admin={true} />
    </div>
  );
}

export default BlogsDelete;
