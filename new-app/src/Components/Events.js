import React from 'react'
import events  from '../api/events'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Events = () => {
    const [event,setEvent]=useState(events);
    console.log(event)
  return (
    <div className='home'>
        <h>Upcoming Events</h>
        <div className='home-event'> {
            event.map((eve)=>{return  (<div className='home-eve' key={eve.id}>
                {console.log(eve)}
                <img src={eve.img}/>
                <h3>{eve.title}</h3>
                <p>{eve.description}</p>
                <h4>{eve.date}</h4>
                <h4>{eve.time}</h4>
                <button><Link to="/login">Register</Link></button>
            </div>)
            })
         }
         </div>
    </div>
  )
}

export default Events