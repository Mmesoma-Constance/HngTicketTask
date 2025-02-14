const Ticket = ({ ticketData }) => {
  return (
    <div className="ticket">
      <h3>{ticketData.eventName}</h3>
      <p>{ticketData.date}</p>
      <p>{ticketData.location}</p>

      <div className="ticket-user">
        <img src={ticketData.avatar} alt="User Avatar" />
        <div>
          <p>
            <strong>{ticketData.name}</strong>
          </p>
          <p>{ticketData.email}</p>
        </div>
      </div>
      <div className="barcode">{ticketData.barcode}</div>
    
    </div>
  );
};

export default Ticket;
