import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.css";
import axios from "axios";
import { UserContext } from "../../App";

const Admin = () => {
  const [heading, setHeading] = useState("");
  const { text, setText } = useContext(UserContext);
  const ref = useRef(null);
  const [postImage, setPostImage] = useState(null);
  const [emailArray, setEmailArray] = useState([]);
  const submitHeading = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://lookscoutbackend.onrender.com/updateText",
        {
          newText: heading,
        }
      );
      console.log("Heading sent", response);
      // Update state or UI with the retrieved text
    } catch (error) {
      console.error("Error getting text:", error);
    }
    try {
      const response = await axios.get(
        "https://lookscoutbackend.onrender.com/getText"
      );
      setText(response.data.text);
      console.log("Retrieved text:", text);
      // Update state or UI with the retrieved text
    } catch (error) {
      console.error("Error getting text:", error);
    }
    setHeading("");
    alert("Heading added successfully");
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    if (!postImage) {
      alert("Add An Image");
      return;
    }
    const formData = new FormData();
    formData.append("image", postImage);
    try {
      const response = await axios.put(
        "https://lookscoutbackend.onrender.com/updateImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Heading sent", response);
      // Update state or UI with the retrieved text
    } catch (error) {
      console.error("Error getting text:", error);
    }
    ref.current.value = "";
    alert("Image added successfully");
  };
  const getEmails = async () => {
    try {
      const response = await axios.get(
        "https://lookscoutbackend.onrender.com/getAllEmail"
      );
      console.log(response);
      await setEmailArray(response.data.Email);
      console.log("Retrieved text:", emailArray);
      // Update state or UI with the retrieved text
    } catch (error) {
      console.error("Error getting text:", error);
    }
  };
  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <form className="form-container" onSubmit={submitHeading}>
        <input
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          value={heading}
          type="text"
          placeholder="Enter the heading"
          className="admin-input"
        />
        <button className="admin-button">Submit Heading</button>
      </form>
      <form
        className="form-container"
        action="/updateImage"
        method="put"
        enctype="multipart/form-data"
        onSubmit={submitImage}
      >
        <input
          type="file"
          lable="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={handleImageChange}
          className="admin-input"
          ref={ref}
        />
        <button className="admin-button" type="submit">
          Submit
        </button>
      </form>
      <h1>Submitted Emails</h1>
      {emailArray.map((eachEmail) => (
        <p>{eachEmail.email}</p>
      ))}
    </div>
  );
};

export default Admin;
