// Create a form with 2 input fields. There should be an input field for the user’s name, 
// as well as the body of their post, and each should be bound to its own state variable.

import React, { useState } from 'react';
import './CreatePostForm.css'

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
        setName('')
        setPost('')
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <h4><label>Name</label></h4>
                <input type='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
               <h4><label>Post</label></h4>
                <textarea type='post' className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-info createButton form-grid'>Create</button>
        </form>
     );
}
 
export default CreatePostForm;
