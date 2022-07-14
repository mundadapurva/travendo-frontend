import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { navData } from '../../constants/data';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        margin: '20px 130px',
        background: '#FBF8F1',
        justifyContent: 'center'
        // overflow: 'overlay'

    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        justifyContent: 'space-between',
        textDecoration:'none',
        color: 'black'


    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        textDecoration:'none',
        color: 'black'
    }

})


const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Link to='/product' className={classes.container} key={data.id}>
                        <img src={data.url} className={classes.image} alt="Navbar" />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Link>
                ))
            }
        </Box>


    )
}

export default NavBar;