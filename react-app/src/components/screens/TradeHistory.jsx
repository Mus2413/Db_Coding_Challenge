import React from 'react'
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import TradeHistorytable from './TradeHistorytable.js';
const TradeHistory = () => {

    return (
        <div>
           
            <Grid container spacing={2}>
                <Grid item xs={8} md={2}>
                    <Navbar />
                </Grid>
                <Grid item xs={4} md={10}>
                    <TradeHistorytable />
                </Grid>

            </Grid>


        </div>
    )
}
export default TradeHistory;