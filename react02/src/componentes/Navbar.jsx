import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const url = 'http://localhost:4000/categorias'

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => {
            setPosts(response.data)
        })
    }, [])

    return (
        <nav>
            <NavLink to='/'><img src="../img/react.JPG" width="60px" height="60px" /></NavLink>

            <ul>
                {
                    posts.map(
                        post => <li key={post.id}>{post.nombre}
                            {/* <NavLink to=''></NavLink> */}
                        </li>
                    )
                }
            </ul>
            <img src="../img/shopping-cart.png" width="60px" height="60px" />
        </nav>
    )
}


