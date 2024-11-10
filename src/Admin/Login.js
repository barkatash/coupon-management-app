import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function Login() {
  const { register, handleSubmit } = useForm();
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [unsuccessfulLogin, setUnsuccessfulLogin] = useState(false);
  const onSubmit = (data) => {
    if (data.email == "bk@gmail.com" && data.password == "12345678") {
      setSuccessfulLogin(true);
      setUnsuccessfulLogin(false);
    } else {
      setSuccessfulLogin(false);
      setUnsuccessfulLogin(true);
    }
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
            marginTop: "20px",
          }}
        >
          Login
        </Button>
      </form>
      {successfulLogin && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ marginTop: "4%" }}
        >
          Login successful.
        </Alert>
      )}
      {unsuccessfulLogin && (
        <Alert
          severity="error"
          sx={{ marginTop: "4%" }}
        >
          Email/password is incorrect.
        </Alert>
      )}
    </Box>
  );
}
