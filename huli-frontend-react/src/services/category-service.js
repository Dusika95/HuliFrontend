import { api } from "../adapters/product-api";

export const getCategories = () => api.get('api/categories/all-categories').then((res) => res.json());

export const addNewCategory= (category) => api.post('api/categories/admin/create', category).then((res) => res.json())