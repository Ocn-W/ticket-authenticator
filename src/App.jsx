import React from 'react';
import './App.scss';

function App() {
  return (
    <main>
      <section className='ticketDisplay'>
        <button>Generate Ticket</button>
      </section>
      <section className='formSection'>
        <form>
          <label htmlFor='Ticketholder Name'>
            Ticketholder Name
            <input/>
          </label>
          <label htmlFor='Ticket ID Number'>
            Ticket ID Number
            <input/>
          </label>
          <div className='dateID'>
          <label className='date' htmlFor='Ticket Date (MM/DD/YY)'>
            Date (MM/DD/YY)
            <div className='dateInfo'>
              <input/>
              <input/>
              <input/>
            </div>
          </label>
          <label htmlFor='Ticket Unique ID'>
            Unique ID
            <input/>
          </label>
          </div>
          <button>Verify Ticket!</button>
        </form>
      </section>
    </main>
  )
}

export default App
