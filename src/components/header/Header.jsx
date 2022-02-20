import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box } from '@material-ui/core';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButtons from './HeaderButtons.jsx';




const useStyle = makeStyles({
    header: {
        background: '#219f94',
        height: 55

    },
    logo: {
        width: 75

    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0
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
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

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
                    <Box className={classes.component}>
                        <img src={logoURL} className={classes.logo} alt="Logo" />
                        <Box className={classes.container}>
                            <Typography className={classes.subheading}>Explore Plus</Typography>

                        </Box>
                    </Box>
                    <SearchBar />
                    <Box className={classes.siddhi}>
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