import { Product } from "../../app/layout/models/product"
import { ProductsList } from "./ProductList"

export interface CatalogProps {
    products: Product[]
}

export const Catalog = (props: CatalogProps) => {

    return (
        <ProductsList products={props.products}/>
    )
}