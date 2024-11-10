import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Backdrop,
} from "@mui/material";

export function Navbar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/login");
  };

  const handleSignUp = () => {
    navigate("/admin/sign-up");
  };
  const handleCoupons = () => {
    navigate("/admin/coupons");
  };
  const handleReports = () => {
    navigate("/admin/reports");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#37474f" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coupon Management System
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogin();
                  }}
                >
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleSignUp();
                  }}
                >
                  Sign Up
                </MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Backdrop open={drawerOpen} onClick={toggleDrawer(false)} sx={{ zIndex: theme.zIndex.drawer - 1 }} />

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        variant={isMobile ? "temporary" : "persistent"}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#37474f",
            height: "100%",
            color: "white",
            padding: "16px",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ color: "white", marginBottom: "16px" }}>
            Menu
          </Typography>
          <List>
            <ListItem button sx={{ cursor: "pointer" }}>
              <ListItemText primary="Coupons" onClick={() => handleCoupons()} />
            </ListItem>
            <Divider sx={{ backgroundColor: "white" }} />
            <ListItem button sx={{ cursor: "pointer" }}>
              <ListItemText primary="Reports" onClick={() => handleReports()} />
            </ListItem>
            <Divider sx={{ backgroundColor: "white" }} />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
