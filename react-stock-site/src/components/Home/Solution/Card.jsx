import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import myclass from './Cart.module.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 200,
        padding: 30
    },

});


const Cart = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <div className={myclass.image}>
                    <img src={product.img} alt="" />
                </div>
                <CardContent className={myclass.center}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.heading}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}

export default Cart
