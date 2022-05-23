// Import dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AuthorCreateOne = (props) => {

    // Sets title, price and description values to form data
    const [name, setName] = useState("");

    // used to redirect to the home page
    const navigate = useNavigate();

    // Set the errors to display to the user
    const [errors, setErrors] = useState([]);

    // Deconstruct to use prop data more easily
    const { reloadList } = props

    // Sends data collected from the form to the back end
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, {
            name
        })
            .then(res => {
                console.log("Response: ", res)
                navigate(`/`)
                reloadList()
                clearForm()
            })
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

    const onCancelHandler = (e) => {
        e.preventDefault();
        navigate(`/`);
    }

    // Clear default values for author name
    const clearForm = () => {
        setName("")
    }

    // Forms to create new author with title, price and description as data
    return (
        <div>
            <form onSubmit={onSubmitHandler}>

                <div>
                    <Link to="/"> Home </Link>
                    <p> Add a new author: </p>

                    <label> Name: </label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)}></input>
                </div>

                <button onClick={onCancelHandler} style={{ width: 100 }}> Cancel </button>
                <button style={{ width: 100 }}> Submit </button>
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

export default AuthorCreateOne