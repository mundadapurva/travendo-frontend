import React from 'react';
import{Box, Button, makeStyles, Typography, Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyle= makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#219f94',
        textTransform:'none',
        fontWeight:600,
        borderRadius: 2,
        padding: '5px 40px' 
    },
    purva: {
        marginLeft: '0 7% 0 auto',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            alignItems:'center',
            textDecoration:'none',
            color: '#fff'
            
        }
    },
    container: {
        display: 'flex',
        textDecoration:'none',
        color: '#fff'
    }

})

const HeaderButtons = ({user}) => {
     const classes = useStyle();

     const cartDetails = useSelector(state => state.cart);
     const { cartItems } = cartDetails;
     return(
         <Box className={classes.purva}>
             {!user?.id && <Link to='/login' ><Button variant="contained" className={classes.login}>Login</Button></Link>}
             {user?.id && <Typography>{user.name}</Typography>}
             <Typography style={{marginTop: 5}}>More</Typography>
             <Link to='/cart' className={classes.container}>
                 <Badge badgeContent={cartItems?.length} color="secondary">
                     <ShoppingCart />
                 </Badge>
                 <Typography  style={{marginLeft: 10}}>Cart</Typography>
             </Link>
         </Box>
        

     )
}

export default HeaderButtons;