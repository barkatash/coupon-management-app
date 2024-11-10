import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "5%",
      }}
    >
      <Typography
        sx={{
          padding: "10px",
          marginBottom: "40px",
          fontWeight: 700,
          fontSize: "1.5rem",
        }}
      >
        Please log in to your account
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <TextField
          sx={{
            marginBottom: "20px",
            width: "100%",
          }}
          required
          {...register("email")}
          id="outlined-required-email"
          label="Email"
          placeholder="Enter your email"
        />
        <TextField
          sx={{
            marginBottom: "20px",
            width: "100%",
          }}
          required
          {...register("password")}
          id="outlined-required-password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: "#b0bec5",
            color: "black",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "1rem",
            width: "100%",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
