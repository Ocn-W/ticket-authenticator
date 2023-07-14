import React from 'react';
import './App.scss';
import Ticket from './components/Ticket';
import Form from './components/Form';

export default function App() {
  return (
    <main>
      <section className='ticketDisplay'>
        <Ticket/>
      </section>
      
      <section className='formSection'>
        <h1>CONFIRMATION FORM</h1>
        <Form />
      </section>
    </main>
  )
}
