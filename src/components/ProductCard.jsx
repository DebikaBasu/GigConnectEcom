import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({ id, title, price, thumbnail }) => {
    const navigate = useNavigate();
    const handleNavigation = () => navigate(`/product/${id}`);

    return (
        <Card className='animate__animated animate__fadeIn' raised>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='260'
                    image={thumbnail}
                    alt={id}
                    onClick={handleNavigation}
                />
                <CardContent>
                    <Typography variant='body2' color='text.secondary' noWrap>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button size='small' color='error' onClick={handleNavigation}>
                    See More
                </Button>
                <Typography variant='subtitle2' color='text.secondary' align='right'>
                    {`$${price}`}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ProductCard;