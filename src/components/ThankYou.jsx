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
            <Typography variant="h4" gutterBottom style={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: '10px' }}>
                Thank You for Your Order!
            </Typography>

            <Typography variant="body1" gutterBottom style={{ marginBottom: '20px', color: '#666', fontSize: '1.1em' }}>
                Your order will be delivered to: <span style={{ color: '#333', textDecoration: 'underline' }}>{email}</span>
            </Typography>

            <Paper elevation={3}
                style={{
                    marginTop: '20px',
                    padding: '20px',
                    width: '70%',
                    margin: 'auto',
                    background: '#f8f8f8',
                }}>
                <List>
                    {cart.map((item, index) => (
                        <ListItem key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <ListItemAvatar style={{ marginRight: '20px' }}>
                                <Avatar alt={item.title} src={item.thumbnail} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={`Price: $${item.price}`}
                                style={{ textAlign: 'left' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Typography ariant="h6" style={{ marginTop: '20px', fontWeight: 'bold', color: 'red', fontSize: '1.2em' }}>
                Total Price: ${totalPrice}
            </Typography>

            <Typography
        variant="subtitle1"
        style={{ marginTop: '20px', color: '#666', fontStyle: 'italic' }}
      >
        We appreciate your business! If you have any questions, please contact our customer support.
      </Typography>

        </div>
    );
};

export default ThankYou;