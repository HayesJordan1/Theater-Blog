import React from "react";
import '../../App.css';
import Posts from "../Posts/Posts";
import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./blog.css"
function Blog () {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()
  
    console.log(search)
    

    useEffect(() =>{
        const fetchPosts = async ()=>{
       const res = await axios.get("/posts"+search)
       setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return (
        <>
        <img  src="https://s-i.huffpost.com/gen/1698848/images/o-CHOPPING-facebook.jpg" className="imgo"/>
        <div className="blog">

        <Posts posts={posts}/>
        
        <Sidebar></Sidebar>
        
        </div>
   
        </>
    )
}
export default Blog