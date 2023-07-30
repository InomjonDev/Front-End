// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import {
//   AiOutlineShoppingCart,
//   AiOutlineHeart,
//   AiOutlineHome,
//   AiOutlineSearch,
// } from "react-icons/ai";
// import Card from "../Card/Card";

// function Navbar() {
//   const [search, setSearch] = useState("");
//   const { pathname } = useLocation();
//   const location = useLocation();
//   const item = location.state?.item;

//   const showCard = !pathname.includes("/product");
//   const showHome = pathname.includes("/product");
//   const showCards = pathname.includes("/create");

//   return (
//     <>
//       <div className="navbar">
//         {showHome && (
//           <div className="tohome">
//             <Link to={"/"}>
//               <AiOutlineHome fill="#fff" />
//             </Link>
//           </div>
//         )}
//         <div className="navbar__search">
//           <input
//             type="search"
//             placeholder="Search..."
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//           <button>
//             <AiOutlineSearch />
//           </button>
//         </div>

//         <div className="navbar__select">
//           <select>
//             <option value="">Choose one</option>
//             <option value="phone">Phone</option>
//             <option value="tv">TV</option>
//             <option value="electronics">Electronics</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// Navbar.js

// Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import Card from "../Card/Card";
import BlogsCard from "../BlogsCard/BlogsCard";

function Navbar() {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  search.toLocaleLowerCase();

  // Determine whether to show the Card component based on the pathname

  // const showCard =
  //   !pathname.includes("/product") &&
  //   !pathname.includes("/create") &&
  //   !pathname.includes("/blogs");

  const showCard = pathname == "/";

  const showBlog = pathname == "/blogs";

  // const showHome = pathname !== "/"; agar homeni o'chirish kerak bo'lsa

  return (
    <>
      <div className="navbar">
        <div className="navbar__list">
          {/* {showHome && ( */}
          <li className="navbar__item">
            <Link to={"/"}>
              <AiOutlineHome />
            </Link>
          </li>
          {/* )} */}
          <li className="navbar__item">
            <Link to={"/create"}>
              <MdOutlineCreateNewFolder />
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={"/blogs"}>
              <TbBrandBlogger />
            </Link>
          </li>
        </div>
        <div className="navbar__search">
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button>
            <AiOutlineSearch />
          </button>
        </div>

        <div className="navbar__select">
          <select>
            <option value="">Choose one</option>
            <option value="phone">Phone</option>
            <option value="tv">TV</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
      {showCard && <Card search={search.toLocaleLowerCase()} />}
      {showBlog && <BlogsCard search={search.toLocaleLowerCase()} />}
    </>
  );
}

export default Navbar;
