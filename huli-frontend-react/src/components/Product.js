import { Link } from "react-router-dom";
import NoImage from "../missing.png"

export default function Product({product}){

    return(
    <div className="product">
        <div>
            <img src={NoImage}/>  
        </div>
        <h3>{product.name}</h3>  
        <p>{product.price} Ft</p>
    </div>)
}