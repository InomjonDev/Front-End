import React from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineHome, AiFillStar } from "react-icons/ai";
import "./Singlerouter.css";

function Singlerouter() {
  const location = useLocation();
  const item = location.state.item;

  const starArray = Array.from({ length: item?.star ?? 0 }, (_, index) => (
    <AiFillStar key={index} fill="#f39c12" />
  ));

  return (
    <>
      <div className="singlerouter">
        <div className="singlerouter__wrapper">
          <div className="singlerouter__img">
            <img src={item?.url} alt="" />
          </div>
          <div className="singlerouter__texts">
            <div className="singlerouter__texts-title">
              <h1>{item?.name}</h1>
            </div>
            <div className="singlerouter__texts-desc">
              <p>{item?.desc}</p>
            </div>
            <div className="singlerouter__texts-price">
              <span>Narxi: ${item?.price}</span>
            </div>
            <div className="singlerouter__texts-star">{starArray}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singlerouter;
