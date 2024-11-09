import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
export function CouponUserInterface({ price, setPrice }) {
  //I assumed each coupon brings 20% discount, but the coupon details should be fetched from API.
  const [couponCode, setCouponCode] = useState('');
  const handleCouponCodeInput = (e) => {
    setCouponCode(e.target.value);
  };
  return (
    <Box
      sx={{
        marginTop: '17%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          color: '#37474f',
          mb: 2,
        }}
      >
        Verify Your Coupon
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: 'center',
          fontWeight: 400,
          color: '#757575',
          mb: 4,
        }}
      >
        Enter coupon code to verify expiration date and save value
      </Typography>
      <TextField
        variant='filled'
        label='Coupon Code'
        value={couponCode}
        onChange={handleCouponCodeInput}
        sx={{
          width: '100%',
          maxWidth: 400,
          mb: 3,
          '& .MuiFilledInput-root': {
            backgroundColor: '#ffffff',
            borderRadius: 1,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
          '& .MuiFilledInput-underline:before': {
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
          },
          '& .MuiFilledInput-underline:hover:before': {
            borderBottomColor: '#3f51b5',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#3f51b5',
          },
        }}
      />
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#d32f2f',
          color: '#fff',
          fontWeight: 700,
          width: '100%',
          maxWidth: 400,
          paddingY: 1.5,
          boxShadow: '0px 4px 12px rgba(211, 47, 47, 0.4)',
          '&:hover': {
            backgroundColor: '#b71c1c',
          },
        }}
        onClick={() => setPrice(Math.round(price * 0.8))}
      >
        Apply
      </Button>
    </Box>
  );
}