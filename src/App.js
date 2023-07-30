import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Singlerouter from "./router/Singlerouter/Singlerouter";
import CreateProduct from "./router/CreateProduct/CreateProduct";
import Blogs from "./router/Blogs/Blogs";
import BlogsDelete from "./router/BlogsDelete/BlogsDelete";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/product/:id" element={<Singlerouter />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/blogs-delete" element={<BlogsDelete />} />
      </Routes>
    </div>
  );
}

export default App;
