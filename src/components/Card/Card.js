import React, { useState, useEffect } from "react";
import "./Card.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "../../api";

function Card({ search }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then(res => setData(res.data.innerData))
      .catch(err => setData([])); // If an error occurs, set data to an empty array
  }, []);

  return (
    <>
      <div className="card">
        <div className="card__wrapper">
          {data
            ?.filter(pro => pro.name.toLowerCase().includes(search))
            .map(item => (
              <div className="card__item" key={item._id}>
                <div className="card__content">
                  <div className="card__content-img">
                    <Link to={`/product/${item._id}`} state={{ item }}>
                      <img
                        className="img"
                        src={item.url[0]}
                        width="auto"
                        height={250}
                      />
                    </Link>
                  </div>
                  <div className="card__content-texts">
                    <div className="card__content-texts-body">
                      <h2 className="title">
                        <Link to={`/product/${item.id}`} state={{ item }}>
                          {item.name}
                        </Link>
                      </h2>
                      <span className="desc">{item.desc}</span>
                      <span className="desc">${item.price}</span>
                      <div className="star">
                        {Array.from(
                          { length: Math.min(item.star || 1, 5) },
                          (_, index) => (
                            <AiFillStar key={index} />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Card;

// ?.filter(pro => pro.name.toLowerCase().includes(search))
