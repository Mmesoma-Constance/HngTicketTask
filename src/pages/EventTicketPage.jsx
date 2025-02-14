import React, { useState } from "react";
import Ticket from "./Ticket"; // Ticket Component
import "./Tickets.css";

const EventTicketPage = () => {
  const [ticketData] = useState({
    eventName: "Techember Fest '25",
    date: "10 March, 2025 | 7:00 PM",
    location: "Nairobi, Kenya",
    name: "Jul Chukw",
    email: "user@email.com",
    avatar: "https://via.placeholder.com/100", // Replace with user avatar URL
    barcode: "246897 87962",
  });

  return (
    <div className="event-page">
      <header>
        <h1>Ready</h1>
        <nav>
          <a href="#">Events</a>
          <a href="#">My Tickets</a>
          <a href="#">About Project</a>
          <button className="my-tickets-btn">MY TICKETS →</button>
        </nav>
      </header>

      <main className="container">
        <h2>Your Ticket is Booked!</h2>
        <p>Check your email for a copy or you can download</p>

        <Ticket ticketData={ticketData} />

        <div className="button-container">
          <button className="secondary-btn">Book Another Ticket</button>
          <button className="primary-btn">Download Ticket</button>
        </div>
      </main>
    </div>
  );
};

export default EventTicketPage;
