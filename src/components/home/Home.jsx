import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, makeStyles } from '@material-ui/core';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer'
// import Homecards from '../homecards/Homecards';

const useStyle = makeStyles({
    component: {
        padding: 5,
        background: '#FBF8F1'
    },
    page: {
        background: '#FBF8F1'
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        
            <Box className={classes.page}>
                <NavBar />
                <Box className={classes.component}>
                    <Banner />
                </Box>
                <h2 style={{fontFamily: "cursive", paddingTop:"30px", paddingLeft:"50px", fontWeight:"bold" }}>Our Premium Products</h2>
                <Cards />
                <h2 style={{fontFamily: "cursive", paddingTop:"30px", paddingLeft:"50px", fontWeight:"bold" }}>Best Sellers</h2>
                {/* <Homecards /> */}
                <Cards />

                <Footer />

            </Box>
       


    )
}


export default Home; 