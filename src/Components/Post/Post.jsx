// Create a template of how you would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the Post component, create 2 separate functions – one for when the “like” button is clicked, 
// and one for when the “dislike” button is clicked. 
// Bind these functions to their respective buttons onClick event. 
// Within these functions, start to lay out the steps that need to occur when each button is clicked.
import React, { useState } from 'react';
import './Post.css';


const Post = (props) => {
    const [liked,setLiked] = useState("inactive");
    const [disliked, setDisliked] = useState("inactive");

    function handleLike(){
        if(liked === "inactive"){
            setLiked("green")
        }
        else {
            setLiked("inactive")
        }
        setDisliked("inactive")
    };

    function handleDislike() {
        if(disliked === "inactive"){
            setDisliked("red")
        }
        else {
            setDisliked("inactive")
        }
        setLiked("inactive")
    };
    

    return ( 
        <div>
            <h4>{props.entry.name}</h4>
            <p className='p'>{props.entry.post}</p>
            <div>
                <button className={liked} onClick={handleLike} >
                    <img src='love.png' alt='heart'></img>
                </button>
               
                <button className={disliked} onClick={handleDislike}>
                    <img src='dislike.png' alt='broken heart'></img>
                </button>
            </div>
        </div>
     );
    }
 
export default Post;

// abcdefghijklmnopqrstuvwxyz
