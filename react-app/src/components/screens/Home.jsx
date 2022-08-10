import React from 'react'
import Bonds from '../Bonds';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
const Home = () => {

    return (
        <div>
           
            <Grid container spacing={2}>
                <Grid item xs={8} md={2}>
                    <Navbar />
                </Grid>
                <Grid item xs={4} md={10}>
                    <Bonds />
                </Grid>

            </Grid>


        </div>
    )
}

export default Home;