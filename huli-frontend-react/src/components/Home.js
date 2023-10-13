import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useGetCategory } from "../hooks/category-hooks";
import Category from "./Category";

export default function Home() {
  const { categories, getCategories, isLoading: isFetchingCategories} = useGetCategory();

  useEffect(() => {
    getCategories();
  }, []);

  const isLoading = isFetchingCategories;

  return <div className="home">
    <nav>
    {categories.length === 0 ? (
        <div className="form-container">
          <p className="message">No category yet.</p>
        </div>
      ) : (
        <div className="category">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      )}
    </nav>
    <h1>It is the title of home page</h1>
    <p>there is some content of home paga</p>
    </div>;
}
