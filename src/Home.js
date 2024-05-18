import { useContext } from 'react'
import Feed from './Feed'
import DataContext from './content/DataContext'
const Home = () => { 
  // console.log(posts.length);
  const{searches, fetchError,isload}=useContext(DataContext);
  return (
    <main className='Home'>
      {isload && <p className='statusMsg'>Loading Posts....</p>}
      {isload && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
      {!isload && !fetchError && (searches.length ? (
        <Feed posts={searches} />
      ) :(
          <p style = {{marginTop:'1rem',color:'red'}}>
            No Posts to Display
          </p>
      ))}
    </main>
  )
}

export default Home