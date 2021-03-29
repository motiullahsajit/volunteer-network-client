import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://quiet-river-48888.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className='row g-4'>
            {
                events.map(event => <Event key={event._id} event={event} />)
            }
        </div>
    );
};

export default Home;