// Create a template of how you would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the Post component, create 2 separate functions – one for when the “like” button is clicked, 
// and one for when the “dislike” button is clicked. 
// Bind these functions to their respective buttons onClick event. 
// Within these functions, start to lay out the steps that need to occur when each button is clicked.



const Posts = (props) => {

    return ( 
        <table className="table">
            <thead>
                <tr>Name</tr>
                <tr>Post</tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.name}</td>
                            <td>{entry.post}</td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default Posts;

