import axios from "axios";

export const loginUser = (values) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:8000/login`, values);

        dispatch({ type: 'SET_USER', user:  data.user });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const signupUser = (values) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:8000/signup`, values);
        console.log(data)

        dispatch({ type: 'SET_USER', user: data.user });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};