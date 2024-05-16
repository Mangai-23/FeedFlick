import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from './content/DataContext';

const EditPost = ({}) => {
  const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}=useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  
  return (
    <main className='NewPost'>
      {/* <p>{editBody}</p>
      <p>{post?.body}</p>
      <p>{editTitle}</p> */}
      {
        post &&
        <>
          <h2>Edit Post</h2>
          {/* <p>{post.id}</p> */}
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title:</label>
            <input 
              type="text" 
              id="editTitle"
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button 
              type='submit' 
              onClick={() => handleEdit(post.id)}
              aria-label='Edit Post'
            >Save</button>
          </form>
        </>
      }
      {
        !post && 
        <>
            <h2>Post Not </h2>
            <p>Well, Reload the Page</p>
            <p>
              <Link to="/">Visit our Home Page</Link> 
            </p>
        </>
      }
    </main>
  )
}

export default EditPost