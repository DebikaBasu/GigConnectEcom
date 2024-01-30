import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const EmailDialog = ({open, setOpen }) => {

    const [email, setEmail] = React.useState('');
    const navigate = useNavigate();
    
    const handleClose = () => {
        setOpen(false);
        navigate('/');
    };

    const handleSubmit = () => {
        localStorage.setItem('customer_email', email);
        localStorage.removeItem('cart');
        navigate('/thankyou');
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <>
            <Dialog
                open={true}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const emailId = formJson.email;
                        console.log(emailId)
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Checkout</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To proceed your orders, please enter your email address here. We
                        will send updates of your order here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Shop More...</Button>
                    <Button onClick={handleSubmit}>Proceed</Button>
                </DialogActions>
            </Dialog></>
    )
}

export default EmailDialog;