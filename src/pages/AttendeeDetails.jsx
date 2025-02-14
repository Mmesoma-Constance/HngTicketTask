import { useState } from "react";
import "./AttendeeDetails.css"; // Import the CSS file
import { NavLink } from "react-router-dom";

const AttendeeDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: null,
    request: "",
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.avatar) errors.avatar = "Profile photo is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, avatar: file });
      setPreview(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Attendee Details</h2>
        <p className="step-indicator">Step 2/3</p>

        <div className="photo-container">
          <label htmlFor="photo">Upload your photo</label>{" "}
          <div className="upload-box">
            {preview ? (
              <img
                src={preview}
                alt="Uploaded Avatar"
                className="avatar-preview"
              />
            ) : (
              <label className="upload-label">
                {/* Drag & drop or click to upload */}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="photo-box">
                  <span className=""> Drag & drop or click to upload</span>
                </div>
              </label>
            )}
          </div>
          {errors.avatar && <p className="error">{errors.avatar}</p>}
        </div>

        <hr />
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>{" "}
          <div className="">
            <label htmlFor="name">Enter your email</label>{" "}
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="">
            <label htmlFor="name">Special Request?</label>
            <textarea
              value={formData.request}
              onChange={(e) =>
                setFormData({ ...formData, request: e.target.value })
              }
            />
          </div>
          <div className="buttons">
            <NavLink to="/" className="link">
              {" "}
              <button type="button" className="back">
                Back
              </button>{" "}
            </NavLink>
            <NavLink to="/eventTicket" className="link">
              {" "}
              <button type="submit" className="submit">
                Get My Free Ticket
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
