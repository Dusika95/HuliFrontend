import Category from "./Category"
import { useGetCategory } from "../hooks/category-hooks";
import { useEffect, useState } from "react";

export default function CategoryList(){

  const { categories, getCategories, isLoading: isFetchingCategories} = useGetCategory();

  useEffect(() => {
    getCategories();
  }, []);

  const isLoading = isFetchingCategories;

    return(
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
    )
}