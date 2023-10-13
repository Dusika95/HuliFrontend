import { api } from "../adapters/product-api";

export const getCategories = () => api.get('api/categories/all-categories').then((res) => res.json());