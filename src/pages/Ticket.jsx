const Ticket = () => {
  return (
    <div className="container">
      <div className="text-center text-white">
        <h3 className="heading">Your Ticket is Booked!</h3>
        <p className="subtext">
          Check your email for a copy or you can <span>download</span>
        </p>
      </div>

      <div className="ticket-wrapper">
        <div id="ticket-card" className="ticket-card">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          <section id="ticket" className="ticket">
            <div className="ticket-content">
              <div className="ticket-header">
                <h2 className="event-title">Techember Fest '25</h2>
                <p className="event-details">📍 04 Rumens road, Ikoyi, Lagos</p>
                <p className="event-details">📅 March 15, 2025 | 7:00 PM</p>
              </div>

              <div className="image-container">
                <img src="user-image.jpg" alt="user" className="user-image" />
              </div>
            </div>

            <section className="ticket-info">
              <div className="ticket-detail">
                <p className="label">Name</p>
                <p className="value">John Doe</p>
              </div>
              <div className="ticket-detail">
                <p className="label">Email</p>
                <p className="value">johndoe@example.com</p>
              </div>
              <div className="ticket-detail">
                <p className="label">Ticket Type</p>
                <p className="value">VIP</p>
              </div>
              <div className="ticket-detail">
                <p className="label">Ticket For</p>
                <p className="value">2</p>
              </div>
              <div className="ticket-detail special-request">
                <p className="label">Special Request</p>
                <p className="value">None</p>
              </div>
            </section>
          </section>

          <div className="dashed-line"></div>
        </div>

        <div className="barcode-wrapper">
          <div className="barcode">
            <img src="/Bar Code.svg" alt="barcode" className="barcode-image" />
          </div>
        </div>
      </div>

      <section className="buttons">
        <button className="btn book-again">Book Another Ticket</button>
        <button className="btn download">Download</button>
      </section>
    </div>
  );
};

export default Ticket;
