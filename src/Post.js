import { Link, useParams } from 'react-router-dom'
import { FaTrashAlt } from'react-icons/fa'
import { useContext } from 'react';
import DataContext from './content/DataContext';
const Post = () => {
  const {posts, handleDelete, setEditBody, setEditTitle}=useContext(DataContext);
  const {id} = useParams();
  const post =posts.find(post  => (post.id).toString() === id);
  setEditBody(post?.body ? post.body : '')
  setEditTitle(post?.title ? post.title : '')
  return (
    <main className='PostPage'>
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='editButton'>Edit</button>
            </Link> 
            {/* <button className="deleteButton" onClick={() =>
            handleDelete(post.id)}>
              Delete
            </button> */}
            <FaTrashAlt 
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(post.id)}
            />
          </>
        } 
        {
          !post &&
          <>
            <h2>Post Not Found</h2>
            <p>Well, Reload the Page</p>
            <p>
              <Link to="/">Visit our Home Page</Link> 
            </p>
          </>
        }
      </article> 
    </main>
  )
}

export default Post