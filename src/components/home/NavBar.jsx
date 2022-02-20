import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { navData } from '../../constants/data';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        margin: '20px 130px',
        background: '#FBF8F1',
        overflow: 'overlay'

    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        justifyContent: 'space-between'


    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }

})


const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container} key={data.id}>
                        <img src={data.url} className={classes.image} alt="Navbar" />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>


    )
}

export default NavBar;