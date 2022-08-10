import React from 'react'
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import { UserManagment } from './UserManagment';
const User = () => {

    return (
        <div>
           
            <Grid container spacing={2}>
                <Grid item xs={8} md={2}>
                    <Navbar />
                </Grid>
                <Grid item xs={4} md={10}>
                    <UserManagment/>
                </Grid>

            </Grid>


        </div>
    )
}

export default User;