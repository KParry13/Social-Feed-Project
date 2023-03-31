// Create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 
// Then, utilize the “map” higher order array method to map each post to its own Post component.

const PostList = (props) => {

    return ( 
        <table className="table">
            <tbody>
                {props.parentEntries.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.post}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;
