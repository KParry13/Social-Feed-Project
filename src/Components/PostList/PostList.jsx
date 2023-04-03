// Create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 
// Then, utilize the “map” higher order array method to map each post to its own Post component.
import Post from '../Post/Post'
const PostList = (props) => {

    return ( 
        
        <div>
            {props.parentEntries.map((entry, index) => {
                return (
                <Post key={index} entry={entry} /> 
                )
            })}
        </div>
        
     );
}
 
export default PostList;
