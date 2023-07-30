import React, { useState } from "react";
import "./CreateProduct.css";
import axios from "../../api";
import { toast, ToastContainer } from "react-toastify";

const categories = ["Laptop", "TV", "Phone", "Headphone", "Accessories"];

const initialState = {
  name: "",
  price: "",
  url: [],
  desc: "",
  star: "",
  category: "",
};
function CreateProduct() {
  const [data, setData] = useState(initialState);

  const handleCreate = e => {
    e.preventDefault();
    axios
      .post("/products", data)
      .then(res => {
        console.log(res);
        toast.success("Muvaffaqiyatli yaratildi");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="create__product">
      <form onSubmit={handleCreate} action="">
        <input
          required
          value={data.name}
          onChange={e => setData(p => ({ ...p, name: e.target.value }))}
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={data.price}
          onChange={e => setData(p => ({ ...p, price: +e.target.value }))}
          type="number"
          placeholder="Price"
        />
        <input
          required
          value={data.url}
          onChange={e => setData(p => ({ ...p, url: [e.target.value] }))}
          type="text"
          placeholder="Url"
        />
        <input
          required
          value={data.desc}
          onChange={e => setData(p => ({ ...p, desc: e.target.value }))}
          type="text"
          placeholder="Desc"
        />
        <input
          required
          value={data.star}
          onChange={e => setData(p => ({ ...p, star: e.target.value }))}
          type="number"
          placeholder="Star"
        />
        <select
          name=""
          id=""
          value={data.category}
          onChange={e => setData(p => ({ ...p, category: e.target.value }))}
        >
          <option value="">Choose category</option>
          {categories?.map((i, inx) => (
            <option key={inx} value={i}>
              {i}
            </option>
          ))}
        </select>
        <button>Create product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
