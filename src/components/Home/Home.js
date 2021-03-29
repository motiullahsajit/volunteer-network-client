import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';

// const events = [
//     {
//         name: 'Chid Support',
//         pic: 'https://i.ibb.co/2jXQvSz/child-Support.png'
//     },
//     {
//         name: 'Refuge Shelter',
//         pic: 'https://i.ibb.co/YkWfCXD/refuse-Shelter.png'
//     },
//     {
//         name: 'Food Charity',
//         pic: 'https://i.ibb.co/gSN9hT4/food-Charity.png'
//     },
//     {
//         name: 'Host a clothing swap',
//         pic: 'https://i.ibb.co/ySWG8SX/cloth-Swap.png'
//     },
//     {
//         name: 'Host a river clean up',
//         pic: 'https://i.ibb.co/WnxgqL7/river-Clean.png'
//     },
//     {
//         name: 'Clean water for children',
//         pic: 'https://i.ibb.co/sgZf7Md/clean-Water.png'
//     },
//     {
//         name: 'Good education',
//         pic: 'https://i.ibb.co/WkstxjM/good-Education.png'
//     },
//     {
//         name: 'New book for children',
//         pic: 'https://i.ibb.co/x1yz6QS/newBooks.png'
//     }
// ]

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/events')
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