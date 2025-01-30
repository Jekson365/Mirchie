import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "../styles/components.scss";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Music", link: "/music" },
    { name: "Movies", link: "/movies" },
  ];

  const authItems = [
    { name: "Login", link: "/login" },
    { name: "Signup", link: "/signup" },
  ];

  const drawer = (
    <div>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {authItems.map((item) => (
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <AppBar
        style={{ boxShadow: "none" }}
        className="nav-bar"
        position="static"
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {!isMobile && (
              <>
                <Stack direction={"row"} gap={"20px"}>
                  {navItems.map((item) => (
                    <Typography
                      key={item.name}
                      color="inherit"
                      className="nav-item"
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Stack>
              </>
            )}
          </Typography>
          {!isMobile && (
            <>
              <Stack
                direction={"row"}
                gap={"20px"}
                style={{ marginLeft: "auto" }}
              >
                {authItems.map((item) => (
                  <Typography
                    key={item.name}
                    color="inherit"
                    className="nav-item"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </Typography>
                ))}
              </Stack>
            </>
          )}
        </Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
}

export default Navbar;
