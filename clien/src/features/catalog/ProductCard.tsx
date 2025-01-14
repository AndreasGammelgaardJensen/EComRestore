import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/layout/models/product"

export interface ProductCardProps {
    product: Product
}

export const ProductCard = ({product}: ProductCardProps) => {

    return (
        <Card elevation={3}
            sx={{width: 280,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'}}
            >
            
            <CardMedia sx={{
                height:240,
                backgroundSize: 'cover'}}
                image={product.pictureUrl}
                title={product.name}
                />
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{textTransform: 'uppercase'}}
                    variant="subtitle2"
                >
                    {product.name}
                </Typography>
                <Typography
                
                    variant="h6"
                >
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions 
            sx={{justifyContent: 'space-between'}}>

        <Button> Add to cards</Button>
        <Button></Button>
        </CardActions>
        </Card>
    )
}