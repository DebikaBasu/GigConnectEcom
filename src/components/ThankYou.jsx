import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const ThankYou = () => {

    const { cart } = useContext(CartContext);
    const email = localStorage.getItem('customer_email');
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Thank You for Your Order!
            </Typography>

            <Typography variant="body1" gutterBottom>
                Your order will be delivered to: {email}
            </Typography>

            <Paper elevation={3} style={{ marginTop: '20px', padding: '10px' }}>
                <List>
                    {cart.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={item.title} src={item.thumbnail} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={`Price: $${item.price}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Total Price: ${totalPrice}
            </Typography>
        </div>
    );
};

export default ThankYou;