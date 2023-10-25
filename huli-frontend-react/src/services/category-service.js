import { api } from "../adapters/product-api";

export const getCategories = () => api.get('api/categories/all-categories').then((res) => res.json());

export const addNewCategory = (category) => api.post('api/categories/admin/create', category).then((res) => res.json());

export const deleteCategory = (categoryId) =>
  api.delete(`api/categories/admin/${categoryId}`).then((res) => {
    if (!res.ok) {
      // Handle any non-successful status codes here, e.g., show an error message
      throw new Error("Failed to delete category");
    }

    // Check if the response has content, and parse it if it does
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return res.json();
    } else {
      return null; // No content, return null or an appropriate value
    }
  });