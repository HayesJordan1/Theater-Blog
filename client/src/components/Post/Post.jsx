import React from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"
export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
   
    <div className='post'>
      {post.photo && 
     <img
     className='postImg'
     src={PF + post.photo}
     alt="Post"  />
      }
     <div className="postInfo">
        
        <Link  to={`/post/${post._id}`} className="link">
          <span className='postTitle'>
        {post.title}
        </span></Link>
        <hr />
        <div className="postCat">
          {post.categories.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <span className="postCat">{c.name}</span>
            </Link>
          ))}

        </div>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
     </div>
     <p className='postDesc'>
    {post.desc}
     </p>
    </div>
  )
}
