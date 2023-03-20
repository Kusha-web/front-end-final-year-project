import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function AddressForm({ userData }) {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    email: userData.email,
    password: userData.password,
    ownername: userData.name,
  });
  const blogSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:1000/end_user/userblogcreation";
    axios.post(url, {
      header: blogData.title,
      content: blogData.description,
      email: blogData.email,
      password: blogData.password,
      owner: blogData.ownername,
    }).then((res) => {
      console.log(res.data.massage);
    })
  };

  console.log(blogData);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Post Blogs</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Card sx={{ maxWidth: 800, marginTop: "20px", padding: "30px" }}>
          <TextField
            required
            id="title"
            title=""
            label="Title"
            fullWidth
            autoComplete="given-name"
            marginTop="10px"
            name="title"
            value={blogData.name}
            onChange={handleChange}
          />

          <TextField
            required
            id="description"
            name="description"
            label="Description"
            multiline
            rows={7}
            fullWidth
            marginTop="10px"
            value={blogData.description}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
          <IconButton
            style={{ borderRadius: "10px", marginTop: "20px" }}
            onClick={blogSubmit}
          >
            Post
          </IconButton>
        </Card>
      </div>
    </div>
  );
}
