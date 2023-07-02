import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplaySingleApplication from "./DisplaySingleApplication";
const DisplayApplications = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      (async () => {
        const response = await axios.get(
          `http://localhost:5000/api/applications/${localStorage.getItem(
            "user"
          )}`
        );
        setApiData(response.data.result);
      })();
    }
  }, [localStorage.getItem("user")]);

  return (
    <>
      <h2>User's Applications</h2>

      {apiData?.map((singleApplicaton) => (
        <DisplaySingleApplication
          key={singleApplicaton._id}
          applicationId={singleApplicaton._id}
          skills={singleApplicaton.skills}
        />
      ))}
    </>
  );
};

export default DisplayApplications;
