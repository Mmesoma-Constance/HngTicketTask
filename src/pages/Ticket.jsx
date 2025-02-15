import React, { useEffect, useState } from "react";
import "./Tickets.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Ticket = () => {
  const [attendee, setAttendee] = useState({});
  const [ticketData, setTicketData] = useState({});
  const [barcode, setBarcode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAttendee = JSON.parse(localStorage.getItem("attendeeData"));
    const storedTicket = JSON.parse(localStorage.getItem("ticketData"));
    const storedBarcode = localStorage.getItem("barcode");

    if (!storedAttendee || !storedTicket) {
      navigate("/ticketSelection");
    } else {
      setAttendee(storedAttendee);
      setTicketData(storedTicket);

      if (storedBarcode) {
        setBarcode(storedBarcode);
      } else {
        const newBarcode = Math.floor(
          100000 + Math.random() * 900000
        ).toString();
        setBarcode(newBarcode);
        localStorage.setItem("barcode", newBarcode);
      }
    }
  }, [navigate]);

  return (
    <div className="ticket-container">
      <div className="ticket-head">
        <h2 className="title">Ready</h2>
        <span className="">Step 3/3</span>
      </div>
      <div className="progress-bar3">
        <div className="progress-status3"></div>
      </div>
      <div className="ticket-heading">
        <h2>Your Ticket is Booked!</h2>
        <p>Check your email for a copy or download</p>
      </div>
      <div className="ticket">
        <h1 className="event-title">Techember Fest '25</h1>
        <p className="event-info">📍 Venue | 📅 March 15, 2025 | ⏰ 7:00 PM</p>

        <div className="ticket-details">
          <img
            src={attendee.avatar || "default-avatar.png"}
            alt="Attendee Avatar"
            className="avatar"
          />
          <div className="ticket-grid">
            {" "}
            <p>
              <span>Name:</span>
              <br />
              <strong>{attendee.name}</strong>
            </p>
            <p>
              <span>Email:</span>
              <br /> {attendee.email}
            </p>
            <p>
              <span>Ticket Type:</span> <br />
              {ticketData.type || "Not Available"}
            </p>
            <p>
              <span>Ticket for:</span> <br />{" "}
              {ticketData.quantity || "Not Available"}
            </p>
          </div>
        </div>

        {/* <div className="barcode">
          <p>{barcode}</p>
        </div> */}
      </div>{" "}
      <div className="buttons">
        <div>
          <NavLink to="/" className="link">
            <button className="next">Book Another Ticket</button>
          </NavLink>
        </div>
        <div>
          {" "}
          <button className="cancel">Download Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
