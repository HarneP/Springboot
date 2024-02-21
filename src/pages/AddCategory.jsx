import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components";
import Category from "../models/category";
import categoryService from "../services/category.service";

const AddCategory = () => {
  const [category, setCategory] = useState(new Category("", ""));
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!category.categoryName) return;
    categoryService
      .addCategory(category)
      .then((_) => {
        alert("Category added");
        navigate("/product");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        className="container my-5 py-5"
        style={{
          background: "teal",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 className="text-center text-dark">Add Category</h1>
        <hr className="bg-light" />
        <div className="row justify-content-center my-4">
          <div className="col-md-8 col-lg-6">
            <form
              onSubmit={(e) => handleAddCategory(e)}
              style={{
                border: "2px solid #fff",
                borderRadius: "10px",
                padding: "30px",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="form-group">
                <label htmlFor="CName" className="text-dark">
                  Category Name
                </label>
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
                  style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Desc" className="text-dark">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  cols="60"
                  rows="5"
                  value={category.description}
                  placeholder="Enter Description Here"
                  onChange={handleChange}
                  style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddCategory;
