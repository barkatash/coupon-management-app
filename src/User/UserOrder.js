import { Card, Typography, Stack, Divider } from "@mui/material";

export function UserOrder({ price, couponsAmount }) {
  return (
    <Card variant="outlined" sx={{ p: 2, marginTop: "25%", marginLeft: "13%" }}>
      <Typography gutterBottom variant="h5" component="div">
        Order Summary
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6">Subtotal:</Typography>
        <Typography variant="h6">100₪</Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, marginBottom:"15px" }}>
        Before discount
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6">Used Coupons:</Typography>
        <Typography variant="h6">{couponsAmount}</Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6">Estimated Total:</Typography>
        <Typography variant="h6">{price}₪</Typography>
      </Stack>
    </Card>
  );
}
