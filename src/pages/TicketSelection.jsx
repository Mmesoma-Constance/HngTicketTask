import React, { useState, useEffect } from "react";
import "./TicketSelection.css";
import { NavLink } from "react-router-dom";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState("Free");
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    // Save selected ticket and count to localStorage on change
    localStorage.setItem(
      "ticketData",
      JSON.stringify({ type: selectedTicket, quantity: ticketCount })
    );
  }, [selectedTicket, ticketCount]);

  return (
    <div className="ticket-container">
      <div className="ticket-head">
        <h2 className="title">Ticket Selection</h2>
        <span className="">Step 1/3</span>
      </div>

      <div className="progress-bar">
        <div className="progress-status"></div>
      </div>
      <div className="card-container">
        <div className="event-card">
          <h3 className="event-title">Techember Fest '25</h3>
          <p className="event-description">
            Join us for an unforgettable experience at <b>[Event Name]</b>!
            Secure your spot now.
          </p>
          <p className="event-info">
            📍 [Event Location] | 📅 March 15, 2025 | ⏰ 7:00 PM
          </p>
        </div>

        <hr />

        <div className="ticket-selection">
          <h4>Select Ticket Type</h4>
          <div className="ticket-options">
            <button
              className={
                selectedTicket === "Free"
                  ? "ticket-option selected"
                  : "ticket-option"
              }
              onClick={() => setSelectedTicket("Free")}
            >
              <strong>Free</strong> <br />
              <span>REGULAR ACCESS</span>
              <p>20/52</p>
            </button>

            <button
              className={
                selectedTicket === "$150 VIP"
                  ? "ticket-option selected"
                  : "ticket-option"
              }
              onClick={() => setSelectedTicket("$150 VIP")}
            >
              <strong>$150</strong> <br />
              <span>VIP ACCESS</span>
              <p>20/52</p>
            </button>

            <button
              className={
                selectedTicket === "$250 VVIP"
                  ? "ticket-option selected"
                  : "ticket-option"
              }
              onClick={() => setSelectedTicket("$250 VVIP")}
            >
              <strong>$250</strong> <br />
              <span>VVIP ACCESS</span>
              <p>20/52</p>
            </button>
          </div>
        </div>

        <div className="ticket-quantity">
          <h4>Number of Tickets</h4>
          <select
            value={ticketCount}
            onChange={(e) => setTicketCount(parseInt(e.target.value))}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="buttons">
          <div>
            <button className="cancel">Cancel</button>
          </div>
          <div>
            <NavLink to="/attendeeDetails" className=" ">
              <button className="next">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
