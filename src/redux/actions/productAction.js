import * as actionTypes from '../constants/productConstants.js';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        // dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        console.log(id);
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        console.log("hello");
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        console.log(response);
        console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });

    }
};


export const removeProductDetails = () => (dispatch) => {

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};