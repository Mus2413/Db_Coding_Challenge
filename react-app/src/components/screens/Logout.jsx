import React,{useContext} from 'react'
import { useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import Navbar from '../Navbar';
import { toast } from 'react-toastify';
const Logout = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(userContext);
    useEffect(() => {
        const logout = () => {
            dispatch({
                type: 'LOGOUT',
                payload: null,
            });
            localStorage.clear();
            toast.success("Logout Success :)");
            history.push("/login");
        }
        logout();
      }, [])
    return (
        <>
            <Navbar/>
            <h1>Logout SuccessFul</h1>
        </>
    )
}

export default Logout;