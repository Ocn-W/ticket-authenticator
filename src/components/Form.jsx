import React from "react";
import "../Form.scss";

export default function Form() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="ticketholderName">Ticketholder Name</label>
          <input type="text" id="ticketholderName" name="name" required />
        </div>
        <div>
          <label htmlFor="ticketIDNumber">Ticket ID Number</label>
          <input type="text" id="ticketIDNumber" name="id_number" required />
        </div>
        <div className="dateID">
          <div>
            <label htmlFor="ticketDate">Date (MM/DD/YY)</label>
            <div className="dateInfo">
              <input
                type="number"
                id="ticketMonth"
                name="date_month"
                min="1"
                max="12"
                required
              />
              <input
                type="number"
                id="ticketDay"
                name="date_day"
                min="1"
                max="31"
                required
              />
              <input
                type="number"
                id="ticketYear"
                name="date_year"
                min="1958"
                max="2025"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="ticketUniqueID">Unique ID</label>
            <input type="text" id="ticketUniqueID" name="unique_id" required />
          </div>
        </div>
        <button type="submit">Verify Ticket!</button>
      </form>
    </>
  );
}
