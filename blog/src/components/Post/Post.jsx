import React from 'react'
import "./Post.css"
export default function Post() {
  return (
    <div className='post'>
     <img
     className='postImg'
     src="https://th.bing.com/th/id/R.653768b6ecbbe9d38fe08473421a69f8?rik=NOsib1Lx73YSHw&pid=ImgRaw&r=0"
     alt="Post" />
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
     </div>
     <p className='postDesc'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

     </p>
    </div>
  )
}
