import React, { useState } from "react";
import axios from "axios";
const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [value, setValue] = useState(defaultValues);
  const submitFunction = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        value
      );
      localStorage.setItem("user", response.data.result);
    } catch (error) {
      console.log(error);
    }
    setValue(defaultValues);
  };
  return (
    <>
      <h2>Register User</h2>
      <div
        style={{
          display: "flex",
          //   justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <input
          name="name"
          placeholder="Enter name"
          value={value.name}
          onChange={(e) => {
            setValue({ ...value, name: e.target.value });
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={value.email}
          onChange={(e) => {
            setValue({ ...value, email: e.target.value });
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={value.password}
          onChange={(e) => {
            setValue({ ...value, password: e.target.value });
          }}
        />
        <button onClick={submitFunction}>Submit</button>
      </div>
    </>
  );
};

export default Register;
