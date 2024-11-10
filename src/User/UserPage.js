import { CouponUserInterface } from './CouponUserInterface';
import { Navbar } from './Navbar';
import { Box, Grid } from '@mui/material';
import { UserOrder } from './UserOrder';
import { useState } from 'react';

export function UserPage() {

  //The initial price value is 100.
  const [price, setPrice] = useState("100");

  //The initial amount of coupons used is 0.
  const [couponsAmount, setCouponsAmount] = useState(0);
  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '91vh' }}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <UserOrder price={price} couponsAmount={couponsAmount}/>
          </Grid>
          <Grid item xs={7}>
            <CouponUserInterface price={price} setPrice={setPrice} couponsAmount={couponsAmount} setCouponsAmount={setCouponsAmount}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}