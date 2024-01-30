import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Button, Typography, Card, CardMedia, Divider, Box} from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SuccessSnackbar from './../ui/SuccessSnackbar';
import GoBackBtn from './../ui/GoBackBtn';
import ProductDescription from './ProductDescription';
import ItemCount from './ItemCount';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = ({ product }) => {
    const { addItemToCart, isInCart } = useContext(CartContext);
    const [showSuccessBar, setShowSuccessBar] = useState(false);

    const handleAddItemToCart = (quantity) => {
        if (isInCart(product.id) || quantity === 0) return;        
        Object.assign(product, {quantity: quantity});
        addItemToCart({ ...product });
        setShowSuccessBar(true);
    };

    return (
        <>
            <Grid
                container
                mt={5}
                className='animate__animated animate__fadeIn'
                spacing={3}
            >
                <Grid
                    item
                    sm={6}
                    md={4}
                    className='animate__animated animate__fadeInLeft'
                >
                    <Card raised>
                        <CardMedia component='img' image={product.thumbnail} alt={product.id} />
                    </Card>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        mt={1}
                        alignContent='center'
                    >
                        <GoBackBtn />

                        <Typography component='h5' variant='h6' textAlign='center'>
                            ${product.price}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={8}>
                    <Typography component='h3' textAlign='center' gutterBottom>
                        {product.title}
                    </Typography>
                    <Divider />

                    <ProductDescription product={product} />
                    <Divider sx={{ mb: 2 }} />

                    <Box display='flex' justifyContent={'center'} my>
                        {isInCart(product.id) ? (
                            <Button
                                variant='contained'
                                color='error'
                                startIcon={<AssignmentTurnedInIcon />}
                                component={Link}
                                to='/cart'
                            >
                                Finish my purchase
                            </Button>
                        ) : product.stock > 0 ? (
                            <ItemCount stock={product.stock} onAdd={handleAddItemToCart} />
                        ) : (
                            <Typography variant='h6' color='textSecondary'>
                                Out Of Stock
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
            {showSuccessBar && (
                <SuccessSnackbar message={'Product added to cart'} />
            )}
        </>
    );
};

export default ProductDetails;