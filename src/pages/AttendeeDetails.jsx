// import React, { useState, useEffect } from "react";
// import "./AttendeeDetails.css";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// const AttendeeDetails = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     avatar: null,
//     request: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [preview, setPreview] = useState("");
//   const [ticketData, setTicketData] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("ticketData"));
//     if (storedData) {
//       setTicketData(storedData);
//     }
//   }, []);

//   const validate = () => {
//     let errors = {};
//     if (!formData.name) errors.name = "Full name is required";
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Valid email is required";
//     }
//     if (!formData.avatar) errors.avatar = "Profile photo is required";
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, avatar: file });
//       setPreview(imageUrl);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       localStorage.setItem("attendeeData", JSON.stringify(formData));
//       navigate("/ticket");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <div className="ticket-head">
//           <h2 className="title">Attendee Details</h2>
//           <span className="">Step 2/3</span>
//         </div>

//         <div className="progress-bar2">
//           <div className="progress-status2"></div>
//         </div>

//         <div className="photo-container">
//           <label htmlFor="photo">Upload your photo</label>
//           <div className="upload-box">
//             {preview ? (
//               <img
//                 src={preview}
//                 alt="Uploaded Avatar"
//                 className="avatar-preview"
//               />
//             ) : (
//               <label className="upload-label">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//                 <div className="photo-box">
//                   <span> Drag & drop or click to upload</span>
//                 </div>
//               </label>
//             )}
//           </div>
//           {errors.avatar && <p className="error">{errors.avatar}</p>}
//         </div>

//         <hr />
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Enter your name</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//           <div>
//             <label htmlFor="email">Enter your email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div>
//             <label htmlFor="request">Special Request?</label>
//             <textarea
//               cols="30"
//               rows="10"
//               value={formData.request}
//               onChange={(e) =>
//                 setFormData({ ...formData, request: e.target.value })
//               }
//             />
//           </div>
//           <div className="buttons">
//             <div>
//               <NavLink to="/" className="link">
//                 {" "}
//                 <button className="back"> Back</button>{" "}
//               </NavLink>
//             </div>
//             <div>
//               {" "}
//               <button type="submit" className="submit">
//                 Get My Free Ticket
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AttendeeDetails;

import React, { useState, useEffect } from "react";
import "./AttendeeDetails.css";
import { useNavigate } from "react-router-dom";
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
  const [ticketData, setTicketData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ticketData"));
    if (storedData) {
      setTicketData(storedData);
    }
  }, []);

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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));

      const formDataUpload = new FormData();
      formDataUpload.append("file", file);
      formDataUpload.append("upload_preset", "myuploads");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcb4kh2hn/image/upload",
          {
            method: "POST",
            body: formDataUpload,
          }
        );
        const data = await response.json();
        setFormData({ ...formData, avatar: data.secure_url });
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("attendeeData", JSON.stringify(formData));
      navigate("/ticket");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="ticket-head">
          <h2 className="title">Attendee Details</h2>
          <span className="">Step 2/3</span>
        </div>

        <div className="progress-bar2">
          <div className="progress-status2"></div>
        </div>

        <div className="photo-container">
          <label htmlFor="photo">Upload your photo</label>
          <div className="upload-box">
            {preview ? (
              <img
                src={preview}
                alt="Uploaded Avatar"
                className="avatar-preview"
              />
            ) : (
              <label className="upload-label">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="photo-box">
                  <span> Drag & drop or click to upload</span>
                </div>
              </label>
            )}
          </div>
          {errors.avatar && <p className="error">{errors.avatar}</p>}
        </div>

        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="request">Special Request?</label>
            <textarea
              cols="30"
              rows="10"
              value={formData.request}
              onChange={(e) =>
                setFormData({ ...formData, request: e.target.value })
              }
            />
          </div>
          <div className="buttons">
            <div>
              <NavLink to="/" className="link">
                {" "}
                <button className="back"> Back</button>{" "}
              </NavLink>
            </div>
            <div>
              {" "}
              <button type="submit" className="submit">
                Get My Ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
