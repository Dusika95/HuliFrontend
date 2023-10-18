import { useEffect, useState } from "react";
import * as productService from "../services/product-service";

export const useGetProducts = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function getProducts() {
    setIsLoading(true);
    productService
      .getProducts()
      .then((products) => {
        setProducts(products);
      })
      .finally(() => setIsLoading(false));
  }

  function refreshProducts() {
    console.log("refresh");
    setRefresh(!refresh);
  }

  useEffect(() => {
    getProducts();
  }, [refresh]);

  return { getProducts,products, refreshProducts, isLoading };
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

export const useGetProductById = (productId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    productService.getProductById(productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, [productId]);

  return { product, isLoading };
};

export const useEditProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [editedProduct, setEditedProduct] = useState(undefined);

  const editProduct = (product) => {
    setIsLoading(true);
    productService.editProduct(product).then((product) => {
      setEditedProduct(product);
      setIsLoading(false);
    });
  };
  return { editedProduct, editProduct, isLoading };
};
//That is waht relevant now below
export const useGetProductsByCategory = (categoryId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProductsByCategory = (categoryId) => {
    setIsLoading(true);
    productService.getProductsByCategory(categoryId)
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const refreshProducts = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getProductsByCategory(categoryId);
  }, [categoryId, refresh]);

  return { products, refreshProducts, getProductsByCategory, isLoading };
};

/*useEffect(()=>{
    setIsLoading(true);
    productService.getProductsByCategory(categoryId).then((products) => {
      setProducts()
    })
  })*/
/*  const getProducts = () => {
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

  return { products, getProducts, refreshProducts, isLoading };*/
