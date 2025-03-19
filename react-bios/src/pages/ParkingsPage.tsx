import React, { useEffect, useState } from "react";

const arr = ["een", "twee", "drie"];

const ParkingsPage = () => {
  const [parkingsData, setParkingsData] = useState();

  useEffect(() => {});

  fetch(
    "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"
  )
    .then((response) => {
      console.log(response);
      response
        .json()
        .then((data) => {
          console.log(data);
          //   setParkingsData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>{JSON.stringify(parkingsData)}</div>;
};

export default ParkingsPage;
