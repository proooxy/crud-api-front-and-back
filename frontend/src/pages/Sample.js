import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  images: "",
};

const Sample = () => {
  const [state, setState] = useState(initialState);

  const { name, email, images } = initialState;

  const history = useHistory();
  const addimages = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !images) {
      toast.error("Coloque algo válido");
    } else {
      addimages(state);
      history.push("/");
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="images">images</label>
        <input
          type="number"
          id="images"
          name="images"
          placeholder="Your images No. ..."
          onChange={handleInputChange}
          value={images}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Sample;
