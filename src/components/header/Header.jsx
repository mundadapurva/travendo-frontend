import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box } from '@material-ui/core';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButtons from './HeaderButtons.jsx';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';




const useStyle = makeStyles({
    header: {
        background: '#219f94',
        height: 55,
        zIndex:1,
        // position: 'fixed'

    },
    logo: {
        width: 95

    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration:'none',
        color: '#fff'
    },
    subheading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    // ketan: {
    //     background: '#FBF8F1',
    //     height: '100vh'
    // },
    siddhi: {
        paddingLeft: 40
    }


})


const Header = () => {
    const classes = useStyle();
    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const logoURL = 'img/Background.png';
    // const logoURL = 'img/Travendo.png';
    const user = useSelector(state => state.user);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' className={classes.component}>
                        <img src={logoURL} className={classes.logo} alt="Logo" />
                        <Box className={classes.container}>
                            <Typography className={classes.subheading}>Traditional Vendors</Typography>

                        </Box>
                    </Link>
                    <SearchBar />
                    <Box className={classes.siddhi} user={user}>
                        <HeaderButtons />
                    </Box>


                </Toolbar>
            </AppBar>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
{/*             
            <Box className={classes.ketan}>
              
            </Box> */}
        </Box>




    );
}


export default Header;