import { useEffect, useState } from "react";
import * as productService from "../services/product-service";

export const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProducts = () => {
    setIsLoading(true);
    productService.getProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  };

  const refreshProducts = () => {
    console.log("refresh");
    setRefresh(!refresh);
  };

  return { products, getProducts, refreshProducts, isLoading };
};

export const useAddNewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addedProduct, setAddedProduct] = useState(undefined);

  const addNewProduct = (product) => {
    setIsLoading(true);
    productService.addNewProduct(product).then((product) => {
      setAddedProduct(product);
      setIsLoading(false);
    });
  };

  return { addedProduct, addNewProduct, isLoading };
};
export const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deletedProduct, setDeletedProduct] = useState(undefined);

  const deleteProduct = (product) => {
    setIsLoading(true);
    productService.deleteProduct(product.id).then((product) => {
      setDeletedProduct(product);
      setIsLoading(false);
    });
  };
  return { deletedProduct, deleteProduct, isLoading };
};

