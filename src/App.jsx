import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import Header from "./pages/Header";
import EventTicketPage from "./pages/EventTicketPage";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TicketSelection />} />
          <Route path="/attendeeDetails" element={<AttendeeDetails />} />
          {/* <Route path="/eventTicket" element={<EventTicketPage />} /> */}
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Router>
      {/* <Header /> */}
      {/* <TicketSelection /> */}
      {/* <AttendeeDetails /> */}
      {/* <EventTicketPage /> */}
    </>
  );
}

export default App;
