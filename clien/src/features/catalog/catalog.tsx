import { useEffect, useState } from "react";
import { Product } from "../../app/layout/models/product"
import { ProductsList } from "./ProductList"

export const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
        fetch('https://localhost:7083/api/Product')
        .then(response => response.json())
        .then(data => setProducts(data))
      },[])


    return (
        <ProductsList products={products}/>
    )
}