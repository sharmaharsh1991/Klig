import React, { useState, useEffect } from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { mainListItems, secondaryListItems } from "../components/listItems";
import Logo from "../assets/images/logo.png";
import LogoIcon from "../assets/images/logo-icon.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  flex: 1,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: "100%",

  marginLeft: theme.spacing(1),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        maxwidth: "20ch",
      },
    },
  },
}));

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiToolbar-root": {
    minHeight: 80,
  },
  backgroundColor: "#fff",
  color: "#364152",
  [theme.breakpoints.up("lg")]: {
    width: "auto",
    left: 0,
    marginLeft: "72px",
    zIndex: theme.zIndex.drawer + 1,
  },

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("lg")]: {
      left: "auto",
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    "& .logoicon": {
      display: "none",
    },
    "& .MuiList-root": {
      "& .MuiButtonBase-root": {
        borderBottom: "1px solid #4D69C8",
      },
    },
    backgroundColor: "#3A55AD",
    width: drawerWidth,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("lg")]: {
      position: "relative",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      [theme.breakpoints.down("lg")]: {
        marginLeft: -72,
      },
      "& .logoicon": {
        display: "block",
      },
      "& .logo": {
        display: "none",
      },

      "& .MuiToolbar-root": {
        "& .MuiButtonBase-root": {
          display: "none",
        },
      },
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
    "& .MuiButtonBase-root": {
      color: "#8AA4F9",
    },
    "& .MuiListItemIcon-root": {
      color: "#8AA4F9",
    },
  },
}));

const defaultTheme = createTheme();

export default function Header() {
  const [open, setOpen] = useState(false); // Initially closed on mobile

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // Close the drawer on component mount for mobile
    if (window.innerWidth <= 960) {
      setOpen(false);
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "10px",
              "& .media(min-width:1200px": {
                ...(open && { display: "none" }),
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Search sx={{
            maxWidth:300
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <IconButton color="inherit">
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#3A55AD",
                    color: "#fff",
                  },
                }}
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Box
            component="img"
            className="logo"
            sx={{
              width: "100%",
            }}
            src={Logo}
            alt="Logo"
          />
          <Box
            component="img"
            className="logoicon"
            sx={{
              maxWidth: 55,
            }}
            src={LogoIcon}
            alt="logo Icon"
          />
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: "#4D69C8" }} />
        <List component="nav">{mainListItems}</List>
      </Drawer>
    </ThemeProvider>
  );
}
