import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";
import ProductDetails from './ProductDetails';
import LoadingSpinner from '../ui/LoadingSpinner';

const ProductView = () => {

    const { products } = useContext(ProductContext);

    const [item, setItem] = useState(null);
    const { productId } = useParams();
    console.log('id', productId);

    useEffect(() => {
        try {
            products.forEach((product) => {
                if(parseInt(productId) === product.id){
                    setItem(product)
                }
            })
        } catch (err) {
            console.error(err);
        }
    });

    return item ? <ProductDetails product={item} /> : <LoadingSpinner />;
}

export default ProductView;