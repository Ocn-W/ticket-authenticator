import React, { useState } from "react";
import "./App.scss";
import { TicketInfo } from "./contexts/TicketContext";
import Ticket from "./components/Ticket";
import Form from "./components/Form";

export default function App() {
  const [ticketID, setTicketID] = useState("");
  const [ticketDate, setTicketDate] = useState("");
  const [specialID, setSpecialID] = useState("");

  return (
    <main>
      <TicketInfo.Provider
        value={{
          ticketID,
          setTicketID,
          ticketDate,
          setTicketDate,
          specialID,
          setSpecialID,
        }}
      >
        <section className="ticketDisplay">
          <Ticket />
        </section>

        <section className="formSection">
          <h1>CONFIRMATION FORM</h1>
          <Form />
        </section>
      </TicketInfo.Provider>
    </main>
  );
}
