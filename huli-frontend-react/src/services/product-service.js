import { api } from "../adapters/product-api";

export const getProducts = () => api.get('api/products/all-products').then((res) => res.json());

export const addNewProduct = (product) => api.post('api/products/admin/create', product).then((res) => res.json());