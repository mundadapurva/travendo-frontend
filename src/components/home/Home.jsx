import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import {Box, makeStyles} from '@material-ui/core';

const useStyle= makeStyles({
    component: {
        padding :5,
        background: '#FBF8F1'
    }
})

const Home = () => {
    const classes = useStyle();
    return(
        <div>
          <NavBar />
          <Box className={classes.component}>
              <Banner />
          </Box>
        </div>
        
    )
}


export default Home; 