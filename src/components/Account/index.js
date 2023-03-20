import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Account() {
  return (
    <div>
      <h2>My Account</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
            <CardHeader
              avatar={
                <Avatar
                  style={{ width: 80, height: 80 }}
                  aria-label="recipe"
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                />
              }
              title="Your Orders"
              subheader="Check your foods before delivering"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
            <CardHeader
              avatar={
                <Avatar
                  style={{ width: 80, height: 80 }}
                  aria-label="recipe"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJusD9HMN5oFNxGFKeBvYQSjereMD0S0ptrwcXZZrVg&s"
                />
              }
              title="Login & Security"
              subheader="Edit Login, Name and Mobile Number"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
            <CardHeader
              avatar={
                <Avatar
                  style={{ width: 80, height: 80 }}
                  aria-label="recipe"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fmKSGXsu1Jgvz16KkrmoIeZX2BAG54pkZzKyDLLbog&s"
                />
              }
              title="Your Address"
              subheader="Edit adresses for orders"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
            <CardHeader
              avatar={
                <Avatar
                  style={{ width: 80, height: 80 }}
                  aria-label="recipe"
                  src="https://media.istockphoto.com/id/1348378061/photo/golden-plastic-card-with-chip-isolated-on-white-payment-or-credi.jpg?b=1&s=170667a&w=0&k=20&c=_LJxsyySigcUHvHhQQ6xjaWapd4yaAHlbLqcInVUcZA="
                />
              }
              title="Payment Options"
              subheader="Edit or add payment methods"
            />
          </Card>
        </Grid>
      </Grid>
      {/* <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 80, height: 80 }}
              aria-label="recipe"
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
          }
          title="Your Orders"
          subheader="Check your foods before delivering"
        />
      </Card>
      <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 80, height: 80 }}
              aria-label="recipe"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJusD9HMN5oFNxGFKeBvYQSjereMD0S0ptrwcXZZrVg&s"
            />
          }
          title="Login & Security"
          subheader="Edit Login, Name and Mobile Number"
        />
      </Card>
      <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 80, height: 80 }}
              aria-label="recipe"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fmKSGXsu1Jgvz16KkrmoIeZX2BAG54pkZzKyDLLbog&s"
            />
          }
          title="Your Address"
          subheader="Edit adresses for orders"
        />
      </Card>
      <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 80, height: 80 }}
              aria-label="recipe"
              src="https://media.istockphoto.com/id/1348378061/photo/golden-plastic-card-with-chip-isolated-on-white-payment-or-credi.jpg?b=1&s=170667a&w=0&k=20&c=_LJxsyySigcUHvHhQQ6xjaWapd4yaAHlbLqcInVUcZA="
            />
          }
          title="Payment Options"
          subheader="Edit or add payment methods"
        />
      </Card> */}
    </div>
  );
}

export default Account;
