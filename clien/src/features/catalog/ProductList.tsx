import { Box } from "@mui/material"
import { Product } from "../../app/layout/models/product"
import { ProductCard } from "./ProductCard"

export interface ProductsListProps {
    products: Product[]
}

export const ProductsList = (props: ProductsListProps) => {

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center'}}>
            {props.products.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
      </Box>
    )
}