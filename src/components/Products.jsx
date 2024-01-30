import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";


const Products = ({ filter }) => {

    const { products } = useContext(ProductContext);
    let filterProducts = products;
    if(filter){
        filterProducts = products.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    }
    return (
        <>
            <h2>All Products</h2>
            <hr />
            <Grid container spacing={3} py={3}>
                {filterProducts?.map((product) => (
                    <Grid item xs={12} sm={6} lg={4} key={product.id}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Products;