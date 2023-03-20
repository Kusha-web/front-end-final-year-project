import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "../Dashboard/TabPanel";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//     </MenuItem>
//   );
// };

const Sidebar = ({ id, data, handleChange, value }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  console.log(data);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ position: "fixed" }}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  PROFILE
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {data.name}
                </Typography>
                <p>{data.email}</p>
              </Box>
            </Box>
          )}

          <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab
              label="Account"
              icon={<PersonOutlinedIcon />}
              style={{
                color: colors.grey[100],
              }}
            />
            <Tab
              label="Order Food"
              icon={<ShoppingCartIcon />}
              style={{
                color: colors.grey[100],
              }}
            />
            <Tab
              label="Post Blogs"
              icon={<PostAddIcon />}
              style={{
                color: colors.grey[100],
              }}
            />
            <Tab
              label="Customize Food"
              icon={<CoffeeMakerIcon />}
              style={{
                color: colors.grey[100],
              }}
            />
          </Tabs>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
