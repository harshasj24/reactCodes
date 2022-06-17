import React, { useEffect, useState } from "react";
import SampleCard from "./SampleCard";
const DisplayCard = () => {
  let [displayData, setDisplayData] = useState([]);
  const fetchData = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/photos");
    const res = await responce.json();
    setDisplayData([...res].splice(0, 100));
  };
  useEffect(() => {
    fetchData();
    console.log(displayData);
  }, []);
  return (
    <div>
      <div className="row border ">
        {displayData.map((data) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 w-100 mt-3 ">
              <div className="cards d-flex align-items-center justify-content-center">
                <SampleCard url={data.url} />;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCard;
