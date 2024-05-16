import Home from './Home'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Newpost from './Newpost'
import Post from './Post'
import Missing from './Missing'
import Footer from './Footer'
import { Routes, Route, useNavigate} from 'react-router-dom'
import EditPost from './EditPost'
import { DataProvider } from './content/DataContext'
function App() {
  // 
  return (
    <div className="App">
    <DataProvider> 
      <Header title="Social Media App" />
      <Navbar />
      <Routes>
        <Route path="/" element=
          {<Home />}
        />
        <Route path="/postItem">
          <Route index  element=
          {
            <Newpost />
          }
          />
          <Route path=":id" element={
            <Post />}
          />
        </Route>
        <Route path="/edit/:id" element={
            <EditPost  />}> 
          </Route>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={< Missing />} > </Route>
      </Routes>
      <Footer /> 
      </DataProvider> 
    </div>
  );
}

export default App;


{/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/post'>Post</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/newpost" element={<Newpost />}/>
        <Route path="/post">
            <Route index element={<Post />}/>
            <Route path=":id" element={<PostItem/>}/>
            <Route path='newpost' element={<Newpost />}/>
        </Route>
        <Route path="*" element={<Missing />} />
        
      </Routes> 
    

  Fetching inside the App.js  file not using the (useAxiosFetch Hook)
    useEffect( () => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('posts');
        setPosts(response.data);
      }
      catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  })
    
    
    
    */}