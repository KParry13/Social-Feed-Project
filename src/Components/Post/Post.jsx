// Create a template of how you would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the Post component, create 2 separate functions – one for when the “like” button is clicked, 
// and one for when the “dislike” button is clicked. 
// Bind these functions to their respective buttons onClick event. 
// Within these functions, start to lay out the steps that need to occur when each button is clicked.
import React, { useState } from 'react';

const Post = (props) => {
    const [isLiked,setIsLiked] = useState(false)
    const [color, setColor] = useState('red')

    function handleLike(){
        if(isLiked){
            setColor("green")
        }
        
    }

    return ( 
        <div>
            <h3>{props.entry.name}</h3>
            <p>{props.entry.post}</p>
            <button style={{"color":color}}>Like</button>
        </div>
     );
}
 
export default Post;


