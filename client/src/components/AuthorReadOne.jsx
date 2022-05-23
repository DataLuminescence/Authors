import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const AuthorReadOne = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>setAuthor(response.data))
            .catch(err=>console.log(err))
    })

    return (
        <fieldset>
            <legend> AuthorReadOne.jsx</legend>
            {
                product&&
                <div>
                    <h3> Name: {author.name} </h3>
                </div>
            }
        </fieldset>
    )
}

export default AuthorReadOne