// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const AuthorUpdateOne = () => {

    // Get data to set form prepopulated data
    const {id} = useParams()

    // Used to update author name if user updates forms
    const [name, setName] = useState("");

    // used to redirect to the home page
    const navigate = useNavigate();

    // Set the errors to display to the user
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
                const author = response.data
                setName(author.name)
            })
            .catch(err=>console.log(err))
    },[])

    // Updates author in database, returns to root folder and validates errors on submition
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {           
            name})
            .then(response =>             
                navigate(`/`)
            )
            .catch(err => {
                const errArr = []
                const errResults = err.response.data.errors
                console.log(errResults)
                for (const key in errResults) {
                    errArr.push(errResults[key]["message"])
                }
                setErrors(errArr)
        })
    }

    // Forms to create new product with title, price and description as data
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <Link to="/"> Home </Link>
                    <p> Edit this author </p>

                    <label> Name: </label>
                    <input type="text" name="name" value={name}
                    onChange={e => setName(e.target.value)}></input>
                </div>

                <button style={{ width: 150 }}>Update Author</button>
            </form>
            {
                // Loop through errors to provide user with messages on how to correct errors in forms
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default AuthorUpdateOne