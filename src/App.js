// Implement a handleSubmit method for your form, which should pass the entered values to a function on the App.jsx component. 
// That function should create a new post object, 
// add it to the existing array of posts, 
// and update the App.js state variable with the new array.


import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';


function App() {

  const [entries, setEntries] = useState([{name: 'Bob Saget', post: 'Today is the first day of the rest of your life.'}])
  
  function createNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div >
      <CreatePostForm addNewEntryProperty={createNewEntry} />

      
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
