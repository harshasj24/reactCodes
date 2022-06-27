import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import image from "../../assets/image1.jpeg";
import "./sample.css";

const SampleCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 354, margin: "auto", height: "" }}>
        <CardContent className="card-content ">
          <img src={image} alt="" />
        </CardContent>
        <div className="card-footer ">
          <Typography variant="h5" className="container mt-2" color={"white"}>
            Hello this is a reminder message
          </Typography>
          <CardActions className="d-flex btns" disableSpacing>
            <Button>Go To Chart</Button>
            <Button>Go To Dashboard</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default SampleCard;
