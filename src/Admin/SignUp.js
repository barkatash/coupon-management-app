import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log('User created', data);
  };

  const password = watch("password");

  return (
    <form className="login-page" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ height: "70vh" }}
      >
        <Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "20px",
              lineHeight: 1.5,
              fontWeight: "600",
              textAlign: "center",

            }}
          >
            Make.
            <br /> Mangement. <br /> Easier.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              lineHeight: 1.5,
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            Access all coupons and reports
            <br /> in one place.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              marginTop: "30px",
              lineHeight: 1.5,
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Already have an account?
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "1rem",
              borderRadius: "30px",
              backgroundColor: "#b0bec5",
              padding: "15px",
              marginLeft: "40%",
              textTransform: "capitalize",
              color: "black"
            }}
            component={Link}
            to="/admin/login"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: "30px",
                marginTop: "60px",
                lineHeight: 1.5,
                fontWeight: "600",
              }}
            >
              Create Your Account
            </Typography>

            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "70ch" } }}>
              <div>
                <TextField
                  required
                  {...register("email", {
                    pattern:{
                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                       message: "Invalid email address"
                      }
                  })}
                  id="email"
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : "Enter email address"}
                />
              </div>
 
              <div>
                <TextField
                  required
                  {...register("mobileNumber", {
                    maxLength: { 
                      value: 10,
                      message: "mobile number must be 10 characters length",
                    },
                    minLength: {
                      value: 10,
                      message: "mobile number must be 10 characters length",
                    },
                  })}
                  id="mobile-number"
                  label="Mobile Number"
                  helperText={errors.mobileNumber ? errors.mobileNumber.message : "Enter your phone number"}
                  fullWidth
                />
              </div>
            </Box>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "34ch" } }}>
              <TextField
                {...register("firstName")}
                required
                id="first-name"
                label="First Name"
                helperText="Enter your first name"
                fullWidth
              />

              <TextField
                required
                {...register("lastName")}
                id="last-name"
                label="Last Name"
                helperText="Enter your last name"
                fullWidth
              />
            </Box>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "34ch" } }}>
              <TextField
                required
                {...register("password", {
                  minLength: { value: 8,
                    message: "password must have at least 8 characters",
                  }
                })}
                id="password"
                type="password"
                label="Password"
                helperText={errors.password ? errors.password.message : "Enter password"}
                fullWidth
              />
              <TextField
                required
                type="password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "passwords do not match",
                })}
                id="confirm-password"
                label="Confirm Password"
                helperText={errors.confirmPassword ? errors.confirmPassword.message : "Enter password again"}
                fullWidth
              />
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "54ch",
                    margin: "40px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                    backgroundColor: "#b0bec5",
                    padding: "10px",
                    textTransform: "capitalize",
                    color: "black"
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
