import { Context } from "../../context/context";
import "./singlepost.css"
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"



export default function SinglePost() {   
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)





  useEffect(() => {
    const getPost = async () => {
      try{
      const res = await axios.get("/posts/" + path) 
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      } catch(err) {

      }
    }
    getPost()
  }, [path])

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${post._id}`, {
         data: {username: user.username},
        });
   
     } catch(err) {}
     window.location.replace("/blog");
 }
 const handleUpdate = async ()=>{
  try{
    await axios.put(`/posts/${post._id}`, 
       {username: user.username, desc, title}
      );
    
   } catch(err) {}
  //  window.location.reload()
  setUpdateMode(false)
}
 
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && 
     <img
     className='postImg'
     src={PF + post.photo}
     alt="Post"  />
      }
    
      { updateMode ? <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/> :
      <h1 className="singlePostTitle">
        {title}
       {post.username === user?.username && (
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i> 
            <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
        </div>
)}
         </h1>
}
         <div className="singlePostInfo">
            <span className="singlePostAuthor">Authour: <Link className="link" to={`/blog/?user=${post.username}`}><b>{post.username}</b></Link></span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

         </div>
         { updateMode ? <textarea value={desc} onChange={(e) =>setDesc(e.target.value)} className="singlePostDescInput" /> :
         <p className="singlePostDesc">{desc}</p>
}
{updateMode &&
         <button className="singlePostButton" onClick={handleUpdate}>Update</button>
}
           </div>
    </div>
  )
}
