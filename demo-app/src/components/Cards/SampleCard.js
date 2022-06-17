import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function SampleCard({ url }) {
  console.log(url, "child");
  return (
    <Card sx={{ maxWidth: 325 }} className="position-relative">
      <div className="position-absolute setting-icon w-100 d-flex justify-content-end p-2">
        <MoreVertIcon className=" bg-light rounded-circle" />
      </div>

      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Choosing a seamless colour palette
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <div className="footer d-flex align-items-center w-100 p-2 ">
          <div className="modules">4 modules</div>
          <div className="time d-flex align-items-center ml-auto">
            <AccessTimeFilledIcon /> <span>2h 15m</span>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
