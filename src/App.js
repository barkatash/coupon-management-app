import "./App.css";
import { UserPage } from "./User/UserPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat";
import { Navbar } from "./Admin/Navbar";
import { Login } from "./Admin/Login";
import { SignUp } from "./Admin/SignUp";
import { CouponsPage } from "./Admin/CouponsPage";
import { ReportsPage } from "./Admin/ReportsPage";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* This is a route for the user to insert coupon code and see the new price.*/}
          <Route path="/" element={<UserPage />} />

          {/* This is a route for admin login.*/}
          <Route
            path="/admin/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          {/* This is a route for admin sign up.*/}
          <Route
            path="/admin/sign-up"
            element={
              <>
                <Navbar />
                <SignUp />
              </>
            }
          ></Route>
          {/* This is a route for admin coupons system. */}
          <Route
            path="/admin/coupons"
            element={
              <>
                <Navbar />
                <CouponsPage />
              </>
            }
          ></Route>
          {/* This is a route for admin reports system. */}
          <Route
            path="/admin/reports"
            element={
              <>
                <Navbar />
                <ReportsPage />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
