import React from 'react'
import SinglePost from '../../singlePost/SinglePost'
import './single.css'
import Comments from '../../comment/comments'
export default function Single() {
  return (
    <div className="single">
        <SinglePost /> 
        <div className='comment-oop'>
        <Comments currentUserId="1"/>
        
        </div>
    </div>
     
  )
}
