import "./App.css";
import { UserPage } from "./User/UserPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat";
import { Navbar } from "./Admin/Navbar";
import { Login } from "./Admin/Login";
import { SignUp } from "./Admin/SignUp";

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
          <Route path="/" element={<UserPage />} />
          <Route
            path="/admin/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/admin/sign-up"
            element={
              <>
                <Navbar />
                <SignUp />
              </>
            }
          ></Route>
          {/* <Route
            path="/admin/coupons"
            element={
              <>
                <Navbar />
                <CouponsPage />
              </>
            }
          ></Route>
          <Route
            path="/admin/reports"
            element={
              <>
                <Navbar />
                <ReportsPage />
              </>
            }
          ></Route> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
