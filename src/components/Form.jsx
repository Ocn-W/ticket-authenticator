import React, {useState} from "react";
import "../Form.scss";

export default function Form() {
  const [inputValue, setInputVal] = useState('');

  function submit() {
    new FormData();
  }

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="ticketholderName">Ticketholder Name</label>
          <input
            type="text"
            id="ticketholderName"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="ticketIDNumber">Ticket ID Number</label>
          <input
            type="text"
            id="ticketIDNumber"
            name="id_number"
            placeholder="ID"
            required
          />
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
                placeholder="MM"
                required
              />
              <input
                type="number"
                id="ticketDay"
                name="date_day"
                min="1"
                max="31"
                placeholder="DD"
                required
              />
              <input
                type="number"
                id="ticketYear"
                name="date_year"
                min="2000"
                max="2025"
                placeholder="YYYY"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="ticketUniqueID">Unique ID</label>
            <input
              type="text"
              id="ticketUniqueID"
              name="unique_id"
              placeholder="Unique ID"
              required
            />
          </div>
        </div>
        <button type="submit">Verify Ticket!</button>
      </form>
    </>
  );
}
