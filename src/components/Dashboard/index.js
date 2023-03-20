import React, { useEffect, useState } from "react";
import Sidebar from "../global/SideBar";
import Topbar from "../global/Topbar";
import axios from "axios";
import TabPanel from "./TabPanel";
import Account from "../Account";
import Order from "../Order";
import BlogPost from "../BlogPost";
import CustomizeFood from "../CustomizeFood";

function Dashboard({ tokenId }) {
  const [value, setValue] = useState(0);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const url = "http://localhost:1000/end_user/dashboard";
    axios.post(url, { id: tokenId }).then((res) => {
      console.log(res.data);
      setUserData({
        email: res.data.email,
        name: res.data.name,
        password: res.data.password,
      });
    });
  }, []);

  console.log(userData);
  return (
    <div className="dashboard">
      <Sidebar id={tokenId} data={userData} handleChange={handleChange} value={value}/>
      <main className="content" style={{ marginLeft: "300px" }}>
        <Topbar />
        <TabPanel value={value} index={0}>
            <Account/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Order/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <BlogPost userData={userData}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            j<CustomizeFood/>
          </TabPanel>
      </main>
    </div>
  );
}

export default Dashboard;