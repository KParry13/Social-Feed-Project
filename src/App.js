// Implement a handleSubmit method for your form, which should pass the entered values to a function on the App.jsx component. 
// That function should create a new post object, 
// add it to the existing array of posts, 
// and update the App.js state variable with the new array.


import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import NavBar from './Components/NavBar/NavBar';

import './App.css';


function App() {

  const [entries, setEntries] = useState([{name: 'Bob Saget', post: 'Today is the first day of the rest of your life.'}])
  
  function createNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <div className='nav'>
        <NavBar />
      </div>
      <div className='app'>
        <div className='border-box create-post'>
          <CreatePostForm addNewEntryProperty={createNewEntry}/>
        </div>
        <div className='border-box post-list'>
          <PostList parentEntries={entries}/>
        </div>
      </div>
    </div>
  );
}

export default App;
