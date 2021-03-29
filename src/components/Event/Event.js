import React from 'react';

const Event = ({ event }) => {
    const deleteEvent = id => {
        fetch(`https://quiet-river-48888.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE'
        }).then(result => console.log('deleted'))
    }
    return (
        <div className='col-md-3'>
            <img style={{ height: '300px' }} src={event.imageURL} alt="" />
            <h3>{event.name}</h3>
            <button className='btn btn-secondary' onClick={() => deleteEvent(event._id)}>Delete</button>
        </div>
    );
};

export default Event;