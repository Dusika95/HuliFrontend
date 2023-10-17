import { api } from "../adapters/product-api";

export const getProducts = () => api.get('api/products/all-products').then((res) => res.json());

export const getProductById = (productId) => api.get(`api/products/${productId}`).then((res)=>res.json())

export const getProductsByCategory=(categoryId) => api.get(`api/products/category/${categoryId}`).then((res)=>res.json()) //that is what I want to use

export const addNewProduct = (product) => api.post('api/products/admin/create', product).then((res) => res.json());

export const deleteProduct = (productId) => api.delete(`api/products/admin/${productId}`).then((res) => res.json());

//export const editProduct = (product) => api.put(`api/products/admin/${product.id}`, product).then((res)=> res.json())

export const editProduct = (product) => {
    return api.put(`api/products/admin/${product.id}`, product)
    .then((res) => {
      if (!res.ok) {
        return res.json().then(errorData => {
          console.error(`Failed to update the product: HTTP status ${res.status}`, errorData);
          throw new Error(`Failed to update the product: HTTP status ${res.status}`);
        });
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error; // Rethrow the error to handle it in your component
    });
  };