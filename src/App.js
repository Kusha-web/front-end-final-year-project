import { colorModeContext, useMode } from "./components/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Otp from "./components/Otp";
import Order from "./components/Order";
import CustomizeFood from "./components/CustomizeFood";
import StepContext from "./components/CustomizeFood/stepContext";
import VendorProfile from "./components/VendorProfile";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/global/SideBar";
import { useParams } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import SideBar from "./components/global/SideBar";
import ProtectRoute from "./ProtectRoute";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Account from "./components/Account";

function App() {
  const [theme, colorMode] = useMode();
  const [token, setToken] = useState(undefined);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
          <Route
              path="/account"
              element={
                <div className="dashboard">
                  <SideBar />
                  <Topbar />
                  <main className="content" style={{ marginLeft: "300px" }}>
                    <Account/>
                  </main>
                </div>
              }
            />

            <Route
              path="/order"
              element={
                <div className="dashboard">
                  <SideBar />
                  <Topbar/>
                  <main className="content" style={{ marginLeft: "300px" }}>
                    <Order />
                  </main>
                </div>
              }
            />
            <Route path="/vendorprofile" element={<VendorProfile />} />
            <Route
              path="/blogpost"
              element={
                <div className="dashboard">
                  <SideBar />
                  <main className="content" style={{ marginLeft: "300px" }}>
                    <Topbar />
                    <BlogPost />
                  </main>
                </div>
              }
            />
            <Route
              path="/customizefood"
              element={
                <div className="dashboard">
                  <SideBar />
                  <main className="content" style={{ marginLeft: "300px" }}>
                    <Topbar />
                    <StepContext>
                      <CustomizeFood />
                    </StepContext>
                  </main>
                </div>
              }
            />
            <Route path="/signin" element={<SignIn token={setToken}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="user/:id" element={<ProtectRoute component={Dashboard} token={token}/>}/>
          </Routes>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
