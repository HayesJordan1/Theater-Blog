import axios from "axios"
import { useSyncExternalStore } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
    const getCats = async () => {
        const res = await axios.get("/categories")
        setCats(res.data)
    }
    getCats()
    }, [])
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About the Creator</span>
                <img src="https://th.bing.com/th/id/R.f0c3f0321fecc806d3fc74f32d0777f0?rik=Gf6%2f%2fnKILJ8fTg&pid=ImgRaw&r=0" alt=""></img>
                <p>I am from Deleware and I love to bake so much! So I decided to make a cooking blog so that
                    everyone can share baking tips and tricks with one another! I hope you enjoy my
                    website </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                <i class="fa-brands fa-square-facebook sidebarIcon"/>
                <i class="fa-brands fa-square-instagram sidebarIcon"/>
                <i class="fa-brands fa-square-pinterest sidebarIcon"/>
                <i class="fa-brands fa-square-twitter sidebarIcon"/>
                </div>
            </div>

        </div>
    )
}