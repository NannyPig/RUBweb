import React, { useEffect, useState } from "react";

const arr = ["een", "twee", "drie"];

// Async/await

const ParkingsPage = () => {
  const [parkingsData, setParkingsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const asyncFn = async () => {
    try {
      const response = await fetch(
        "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    // return new Promise();
  };

  useEffect(() => {
    asyncFn();
  }, []);

  //   useEffect(() => {
  //     fetch(
  //       "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"
  //     )
  //       .then((response) => {
  //         console.log(response);
  //         response
  //           .json()
  //           .then((data) => {
  //             console.log(data);
  //             setParkingsData(data);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>{JSON.stringify(parkingsData)}</div>;
};

export default ParkingsPage;
