import React from "react";

const DisplaySingleApplication = ({ applicationId, skills }) => {
  return (
    <div>
      {" "}
      <h4>{applicationId}</h4>
      <ul>
        {skills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplaySingleApplication;
