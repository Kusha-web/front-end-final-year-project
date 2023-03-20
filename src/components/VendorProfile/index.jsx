import * as React from "react";
import { Box, Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const VendorProfile = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Vendor Details</h2>
      <Card sx={{ maxWidth: 1200, marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardHeader
            avatar={
              <Avatar
                style={{ width: 150, height: 150 }}
                aria-label="recipe"
                src="https://media.istockphoto.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=IWEr2P9NfUnhTMgy7YdpG5uau7DlpxzUn10jr8NPpRs="
              >
                R
              </Avatar>
            }
            title="Ruchi Sharma"
            subheader="September 14, 2016"
          />
          <CardContent style={{ maxWidth: "300px" }}>
            Experience
            <LinearProgress variant="determinate" value={50} />
          </CardContent>
          <div className="social-icons">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
        {/* <CardMedia
          component="img"
          height="194"
          image="https://media.istockphoto.com/id/518145080/photo/minestrone-soup-on-the-pot.jpg?s=612x612&w=0&k=20&c=sKroe1_2X3pE-h4gzgL8J7f3wHfAOtw8msbjndmO8H4="
          alt="Paella dish"
        /> */}
        <CardContent>
          About
          <Typography variant="h6" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      <div style={{display: "flex", justifyContent: "space-between"}}>
            <Card sx={{ maxWidth: 345, marginTop: "20px", textAlign: "center" }}>
            <h3>Todays Orders</h3>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
                </Typography>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, marginTop: "20px", textAlign: "center"}} onClick={() => navigate("/customizefood")}>
            <h3>Customzed Order</h3>
            <CardContent>
            </CardContent>
            </Card>
      </div>
    </div>
  );
};

export default VendorProfile;
