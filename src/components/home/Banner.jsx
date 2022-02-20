import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {bannerData} from '../../constants/data';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 200

    },
    carousel:{
        marginTop: 20
    }
})

const Banner = () => {
    const classes = useStyle();
    return(
        <Carousel cycleNavigation={true} className={classes.carousel} >
            {
                bannerData.map(image => (
                    <img src={image.url} className={classes.image} key={image.id} alt="Banner"/>
                ))
            }
        </Carousel>
    )
}

export default Banner;