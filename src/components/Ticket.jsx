import React, { useState, useContext } from "react";
import "../Ticket.scss";
import QRCode from "../assets/QRCode.png";
import { TicketInfo } from "../contexts/TicketContext";

export default function Ticket() {
  const {
    ticketID,
    setTicketID,
    ticketDate,
    setTicketDate,
    specialID,
    setSpecialID,
  } = useContext(TicketInfo);
  const [showTicket, isTicketVisible] = useState(false);
  const numbers = "0123456789";

  function generateTicket() {
    setTicketID(generateID);
    setTicketDate(generateDate);
    setSpecialID(generateSpecID);
    isTicketVisible(true);
  }

  function generateID() {
    let id = "";
    const length = 16;
    for (let i = 0; i < length; i++) {
      if (i > 0 && i % 4 === 0) {
        id += " "; // Add a space every 4 digits
      }
      const randomIndex = Math.floor(Math.random() * numbers.length);
      id += numbers[randomIndex];
    }
    return id;
  }

  function generateDate() {
    const startYear = 2022;
    const endYear = 2025;

    const randomYear =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    // Determine the number of days in the randomly chosen month and year
    const daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1;

    // Format the date components
    // If the number is not double-digits add zero
    const formattedYear = randomYear.toString().padStart(4, "0");
    const formattedMonth = randomMonth.toString().padStart(2, "0");
    const formattedDay = randomDay.toString().padStart(2, "0");

    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
  }

  function generateSpecID() {
    let specialId = "";
    const length = 3;
    for (let i = 0; i < length; i++) {
      const randSpecId = Math.floor(Math.random() * numbers.length);
      specialId += numbers[randSpecId];
    }
    return specialId;
  }

  return (
    <>
      {showTicket ? (
        <div className="ticket">
          <section className="tixEvent">
            <p>Event Name</p>
            <p className="tixCode">{ticketID}</p>
          </section>

          <section className="tixUser">
            <div className="tixName">
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "bold",
                  textDecoration: "underline",
                }}
              >
                Name
              </p>
              <p>John Doe</p>
            </div>
            <div className="tixDate">
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "bold",
                  textDecoration: "underline",
                }}
              >
                Date
              </p>
              <p>{ticketDate}</p>
            </div>
          </section>
          <section className="specialCode">
            <p className="tixSpecCode">{specialID}</p>
            <img src={QRCode} />
          </section>
        </div>
      ) : (
        <p>Your Ticket</p>
      )}

      <button onClick={generateTicket}>Generate Ticket</button>
    </>
  );
}
