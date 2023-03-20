import { Card } from "@mui/material";
import { IconButton, TextField } from "@mui/material";
import axios from "axios";
import { localStorage } from 'global/window'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
    const navigate = useNavigate();
    const storedData = localStorage.getItem("data");
    const back_data = JSON.parse(storedData)
    const [data, setData] = useState({
        name: back_data.name,
        email: back_data.email,
        password: back_data.password,
        otp: ""
    })

    const handleSubmit = () => {
        const url = "http://localhost:1000/end_user/signup";
        const {email,password,name,otp}=data;
        axios.post(url, {email: email, password: password, name: name, otp: otp})
        .then((res) => {
           alert('Otp verified') ;
        });

    }

    console.log(data);
    const handleOTP = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
  return (
    <div>
      <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
        <h2>VERIFY OTP</h2>
        <TextField
          required
          id="title"
          title=""
          label="Otp"
          fullWidth
          autoComplete="given-name"
          marginTop="10px"
          name="otp"
          value={data.otp}
          onChange={handleOTP}
        />
        <IconButton style={{ borderRadius: "10px", marginTop: "20px"}} onClick={handleSubmit}>
          Submit
        </IconButton>
      </Card>
    </div>
  );
};

export default Otp;
