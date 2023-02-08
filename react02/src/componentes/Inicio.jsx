import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export const Inicio = () => {

    const url='http://localhost:4000/productos'

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setPosts(response.data)
        })
    },[])
    
    return (
        <div className='mostrador'>
            <h1>Catalogo de Productos</h1>
            <div className='grilla'>
                
                {
                    posts.map(
                        post=>
                        <div className='carta' key={post.id}>
                            {post.id} - {post.nombre}
                            <img src={post.fuente} width="150px" height="150px" />
                            <NavLink to={`/productos/${post.id}`}>Ver detalle de producto</NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

