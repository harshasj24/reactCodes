import React from "react";
import { Card, Typography } from "@mui/material";
import "./pages.css";
import video from "../../assets/my.mp4";
const Page = () => {
  let imagesUrl = [
    "https://cdn.pixabay.com/photo/2022/06/16/10/13/flower-7265594__480.jpg",
    "https://cdn.pixabay.com/photo/2022/06/16/10/13/flower-7265594__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/14/10/23/sea-3874707_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/24/01/53/macaw-6488474_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/24/01/53/macaw-6488474_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/02/22/39/man-7239061_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/02/22/39/man-7239061_1280.jpg",
  ];
  return (
    <div>
      <div className="hero-section">
        <Card className="hero-card">
          <h3>Must Know</h3>
          <p>The more u knows, the more you'll like us</p>
        </Card>
      </div>
      <div className="video-section container w-100 d-flex justify-content-center my-5">
        <video
          poster="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875_1280.jpg"
          className="w-75"
          controls
        >
          <source src={video} />
        </video>
      </div>

      <div className="images container">
        {imagesUrl.map((url) => {
          return (
            <div className="image w-100">
              <img className="w-100 my-4 h-75" src={url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
