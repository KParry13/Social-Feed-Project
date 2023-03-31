// Create a form with 2 input fields. There should be an input field for the user’s name, 
// as well as the body of their post, and each should be bound to its own state variable.

import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='name' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type='post' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePostForm;
