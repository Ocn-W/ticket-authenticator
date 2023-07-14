import React, { useState, useContext } from "react";
import { TicketInfo } from "../contexts/TicketContext";
import "../Form.scss";

export default function Form() {
  const { ticketID, ticketDate, specialID } = useContext(TicketInfo);
  const [idVal, setID] = useState("");
  const [spIDVal, setSpID] = useState("");
  const [dateVal, setDate] = useState("");

  function submit(e) {
    if (idVal === ticketID && dateVal === ticketDate && spIDVal === specialID) {
      e.preventDefault();
      alert("Form successfully submitted!");
      console.log(e);
      setID("");
      setDate("");
      setSpID("");
    } else {
      e.preventDefault();
      alert("Incorrect details, please try again.");
      return;
    }
  }

  function handleIDChange(e) {
    setID(e.target.value);
  }
  function handleDateChange(e) {
    setDate(e.target.value);
  }
  function handleSpIDChange(e) {
    setSpID(e.target.value);
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
            value="John Doe"
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
            onChange={handleIDChange}
            value={idVal}
            placeholder="ID"
            required
          />
        </div>
        <div className="date-ID">
          <div className="dateInfo">
            <label htmlFor="ticketDate">Date</label>
            <input
              type="date"
              id="ticketDate"
              name="date"
              onChange={handleDateChange}
              value={dateVal}
              placeholder="MM/DD/YYYY"
              required
            />
          </div>
          <div className="ticketSpecialID">
            <label htmlFor="ticketSpecialID">Unique ID</label>
            <input
              type="text"
              id="ticketSpecialID"
              name="Special_id"
              onChange={handleSpIDChange}
              value={spIDVal}
              placeholder="Special ID"
              required
            />
          </div>
        </div>
        <button type="submit">Verify Ticket!</button>
      </form>
    </>
  );
}

// IF THIS HAD A BACKEND

//1. use FormData() to send the information
//   const formData = new FormData();

//2. Append form field values to the FormData object
//   formData.append('key', value);

//3. Perform POST http request
//   fetch('/api/submit', {
//     method: 'POST',
//     body: formData,
//   })

//4. Handle the response from the server
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Form submission response:', data);
//     })

//5. Handle any errors
//     .catch((error) => {
//       console.error('Form submission error:', error);
//     });

//6. Clear form values after successful submission
//  setKey('')
// };