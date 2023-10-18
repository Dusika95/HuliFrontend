import { api } from "../adapters/product-api";

export const getProducts = () => api.get('api/products/all-products').then((res) => res.json());

export const getProductById = (productId) => api.get(`api/products/${productId}`).then((res)=>res.json())

export const getProductsByCategory=(categoryId) => api.get(`api/products/category/${categoryId}`).then((res)=>res.json()) //that is what I want to use

export const addNewProduct = (product) => api.post('api/products/admin/create', product).then((res) => res.json());

export const deleteProduct = (productId) => api.delete(`api/products/admin/${productId}`).then((res) => res.json());

//export const editProduct = (product) => api.put(`api/products/admin/${product.id}`, product).then((res)=> res.json())

export async function editProduct(product) {
  var res = await api.put(`api/products/admin/${product.id}`, product);
  if(!res.ok) {
    var error = await res.json();
    throw new Error(`Bad Request: ${error}`);
  }

  return res.json();
}