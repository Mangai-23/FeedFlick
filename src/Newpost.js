import { useContext } from "react"
import DataContext from "./content/DataContext"

const Newpost = () => {
  const{handleSubmit,ptitle, setptitle,pbody,setpbody}=useContext(DataContext);
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="ptitle">Title:</label>
        <input 
            id="ptitle"
            type="text" 
            required
            value={ptitle}
            onChange={(e)=> setptitle(e.target.value)}
        />
        <label htmlFor="pbody">Post:</label>
        <textarea 
            id="pbody"  
            required
            value={pbody}
            onChange={(e)=> setpbody(e.target.value)} 
            cols="30" 
            rows="10">
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default Newpost