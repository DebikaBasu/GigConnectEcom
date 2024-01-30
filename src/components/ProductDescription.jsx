import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const ProductDescription = ({ product }) => {
    return (
        <Paper elevation={8} sx={{ my: 3 }}>
            <List>
                {Object.entries(product).filter(item => item[0] === 'description' 
                || item[0] === 'brand' || item[0] === 'category' 
                || item[0] === 'rating').map(([key, value]) => (
                    <Fragment key={key}>
                        <ListItem>
                            <Typography variant='caption' component='p'>
                                <strong>{key}:</strong> {value}
                            </Typography>
                        </ListItem>
                        <Divider variant={'middle'} />
                    </Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default ProductDescription;