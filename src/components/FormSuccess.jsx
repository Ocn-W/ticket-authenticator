import React from 'react';
import Lottie from 'lottie-react';
import ticketSVG from '../assets/svg/ticketAnimSVG.json';
import '../Form.scss';

export default function FormSuccess({goBack}) {
  return (
    <section className='formSuccess'>
        <h2>CONFIRMATION SUCCESSFUL!</h2>
        <Lottie className='ticketSVG' animationData={ticketSVG}/>
        <h3>THANK YOU, ENJOY THE SHOW!</h3>
        <button onClick={() => goBack(false)}>Go Back</button>
    </section>
  )
}
