import React, { useEffect, useState } from "react";
import "./BlogsCard.css";
import { AiOutlineLike } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import axios from "../../api";

function BlogsCard({ admin }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/blogs")
      .then(res => setData(res.data.innerData))
      .catch(err => setData([]));
  }, []);

  const handleDelete = id => {
    axios
      .delete(`/blogs/${id}`)
      .then(res => {
        // If the deletion is successful, update the data state to remove the deleted blog post
        setData(prevData => prevData.filter(item => item._id !== id));
      })
      .catch(err => {
        console.log("Error deleting blog post:", err);
      });
  };

  return (
    <div className="blogscard">
      <div className="blogscard__wrapper">
        {data?.map(item => (
          <div className="blogscard__item" key={item._id}>
            <div className="blogscard__item-title">
              <h2>{item.title}</h2>

              <span>
                <AiOutlineLike />
                {item.likes}
              </span>
            </div>
            <div className="blogscard__item-desc">
              <p>{item.desc}</p>
            </div>
            {admin ? (
              <button className="trash" onClick={() => handleDelete(item._id)}>
                <FiTrash2 />
              </button>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsCard;
