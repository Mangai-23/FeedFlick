import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { format } from "date-fns";
import api from "../api/posts"
const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [posts , setPosts] = useState([])
  const [search,setSearch] = useState('')
  const [searches,setSearches] = useState([])
  const [ptitle,setptitle] = useState('')
  const [pbody,setpbody] = useState('')
  const [editBody,setEditBody] = useState('')
  const [editTitle,setEditTitle] = useState('')
  const {width} = useWindowSize()
  const navigate = useNavigate()
  const {data , fetchError, isload} = useAxiosFetch('https://json-server-deploy-bxg0.onrender.com/posts')
  useEffect( () => {
    setPosts(data);
  },[data])
  

  useEffect(()=> {
    const filterres= posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) 
    || 
    post.body.toLowerCase().includes(search.toLowerCase()
    ))
    // posts
    // .filter( post => 
    // (post.title.toLowerCase().includes(search.toLowerCase)));
    setSearches(filterres.reverse());
    // console.log(filterres);
  },[posts ,search])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const id=posts.length ? parseInt(posts[posts.length -1].id) + 1 : 1;
    const datetime = format(new Date(),'MMM dd, yyyy HH:mm:ss a');
    const newPost = {id:id+"",title: ptitle, datetime, body: pbody};
    try{
    const response = await api.post('/posts',newPost);
    const allPosts = [...posts, response.data];
    setPosts(allPosts)
    setptitle('');
    setpbody('');
    navigate('/')
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

  const handleEdit = async (id) => {
    const datetime = format(new Date(),'MMM dd, yyyy HH:mm:ss a');
    const updatePost = {id,title: editTitle, datetime, body: editBody};
    try{
      const response = await api.put(`posts/${id}`,updatePost);
      const postLists = posts.map((post) => post.id === id? {...response.data} : post);
      setPosts(postLists)
      setEditTitle('')
      setEditBody('');
      navigate('/')
    }
    catch(err) {
      console.error(`Error: ${err.message}`);
    }
  }
  const handleDelete = async(id) => {
    try{
      await api.delete(`posts/${id}`);
      const postLists = posts.filter((post) => post.id !== id);
      setPosts(postLists)
      navigate('/')
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
    return (
        <DataContext.Provider value={{
            width, 
            search, setSearch,
            searches, fetchError,isload,
            handleSubmit,ptitle, setptitle,pbody,setpbody,
            posts, handleDelete, setEditBody, setEditTitle,
            handleEdit, editBody, editTitle
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;