import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }
        console.log(data)
        fetch('https://quiet-river-48888.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site res', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '130a5292a5c958ddb623c1df6c0b349a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container mt-5">
            <h1>Add Your Events Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New exciting event" ref={register} />
                <br /><br />
                <input name="exampleRequired" type="file" onBlur={handleImageUpload} />
                <br /><br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;