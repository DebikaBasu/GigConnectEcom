import { useContext, Fragment } from 'react';
import { CartContext } from './../contexts/CartContext';
import { useState } from 'react';

import CartItem from './CartItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from '../ui/GoBackBtn';
import EmailDialog from './EmailDialog';


const Cart = () => {
    const { amountOfItemsInCart, totalCartPrice, cart, removeItemFromCart } = useContext(CartContext);
    const [open, setOpen] = useState(false);

    const handleCheckout = () => {
        setOpen(true);
    }

    return (
        <>
            <h2>{`My Cart (${amountOfItemsInCart()})`}</h2>
            <hr />
            <br />
            {cart.length > 0 ? (
                <>
                    <Container className='animate__animated animate__fadeIn'>
                        {cart.map((item) => (
                            <Fragment key={item.id}>
                                <CartItem {...item} removeItemFromCart={removeItemFromCart } />
                                <Divider variant='middle' sx={{ my: 3 }} />
                            </Fragment>
                        ))}
                    </Container>

                    <Typography
                        variant='h6'
                        align='right'
                        className='animate__animated animate__fadeInUp'
                    >
                        Total: {'$' + totalCartPrice()}
                    </Typography>

                    <Box display='flex' gap justifyContent={'center'} my>
                        <Button
                            variant='contained'
                            color='error'
                            onClick={handleCheckout}
                            startIcon={<PointOfSaleIcon />}
                        >
                            Proceed to checkout
                        </Button>
                    </Box>
                    {open && <EmailDialog open={open} setOpen={setOpen}/>}

                    <GoBackBtn />
                </>
            ) : (
                <>
                    <Typography variant='h5' align='center' sx={{ my: 5 }}>
                        Please add products to proceed
                    </Typography>
                    <GoBackBtn />
                </>
            )}
        </>
    );
};

export default Cart;