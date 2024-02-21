import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components";
import Category from "../models/category";
import categoryService from "../services/category.service";

const AddCategory = () => {
  const [category, setCategory] = useState(new Category("", ""));
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!category.categoryName) return;
    categoryService
      .addCategory(category)
      .then(() => {
        alert("Category added");
        navigate("/product");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div
          className="card text-light shadow-lg p-4 rounded"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            background: "teal",
          }}
        >
          <h1 className="text-center mb-4">Add a New Product Category</h1>
          <hr className="bg-light" />
          <form onSubmit={handleAddCategory}>
            <div className="form-group">
              <label htmlFor="CName">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="CName"
                name="categoryName"
                value={category.categoryName}
                placeholder="Enter Category Name"
                minLength={4}
                maxLength={20}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Desc">Description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                cols="60"
                rows="5"
                value={category.description}
                placeholder="Enter Description Here"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="my-3 btn btn-light btn-lg"
                type="submit"
                style={{
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #4e54c8, #8f94fb)",
                  border: "none",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddCategory;
