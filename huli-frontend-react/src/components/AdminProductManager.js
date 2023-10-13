import React, {useState, useEffect} from "react";
import { useAddNewProduct, useGetProducts, useDeleteProduct } from "../hooks/product-hooks";
import AddNewProduct from "./AddNewProduct";
import Product from "./Product"

export default function AdminProductManager() {
    const {products, getProducts, refreshProducts, isLoading: isFetchingProducts} =useGetProducts();
    const {addedProduct, addNewProduct, isLoading: isAddingNewProduct}=useAddNewProduct();

    const { deletedProduct, deleteProduct, isLoading: isDeletingProduct } = useDeleteProduct();
    const [showAddProduct,setShowAddProduct] = useState(false)

    const [selectedProduct,setSelectedProduct] = useState(undefined)

    useEffect(()=>{
        getProducts();
    },[addedProduct, deletedProduct]) 

    const isLoading =isFetchingProducts;

    const addButtonChange = () => {
        setShowAddProduct(!showAddProduct)
    }
    
    return (
        <div className="all-products">
            <div className="add-button">
                <h2>My Products</h2>
                <button onClick={addButtonChange}>
                    {showAddProduct ? "Close" : "Add New Product"}
                </button>
            </div>
            {showAddProduct ? (
                <AddNewProduct refresh={getProducts} hide={addButtonChange} addNewProduct={addNewProduct} isLoading={isAddingNewProduct} />
            ) : (
                <></>
            )}
            {products === 'no product yet' ? (
                <div className="form-container">
                    <p className='message'>No products yet.</p>
                </div>
            ) : (
                <div className="products">
                    {products.map((product) => (
                        <Product key={product.id} product={product} onDelete={deleteProduct} isAdmin={true} /*onEdit={() => openEditBuilding(building)} */ />
                    ))}
                </div>

            )}
        </div>
    )

    
}
