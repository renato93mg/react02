import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const url = `http://localhost:4000/productos/${id}`

    const [posts, setPosts] = useState({})

    useEffect(() => {
        axios.get(url).then((response) => {
            setPosts(response.data)
        })
    }, [])

    return (
        <div>
            <h2>Detalle del producto</h2>
            <ul key={posts.id}>
            <li>Codigo del producto: {posts.id}</li>
            <li>Nombre del producto{posts.nombre}</li>
            <li>
                Imagen del producto: <img src={posts.fuente} width="100px" height="100px" />
            </li>
        </ul>
        </div>
        
    )
}


