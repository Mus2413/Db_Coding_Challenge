import React from 'react'
import BondInfoCards from './BondInfoCards';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';

const BondInfo = () => {

    return (
        <div>
           
            <Grid container spacing={2}>
                <Grid item xs={8} md={2}>
                    <Navbar />
                </Grid>
                <Grid item xs={4} md={10}>
                    <BondInfoCards />
                </Grid>

            </Grid>


        </div>
    )
}

export default BondInfo;