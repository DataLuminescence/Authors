import React from 'react';
import axios from 'axios';
import {useHref, useNavigate} from 'react-router-dom';

const AuthorReadAll = (props) => {

    // used to redirect to the home page
    const navigate = useNavigate();

    const onUpdateHandler = (id) => {
        navigate(`/author/update/` + id);
    }

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => props.reloadList())
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Actions Available </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authors && props.authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td style={{width:95}}><button onClick={ () => onUpdateHandler(author._id)}> Edit </button>
                                <button onClick={() => onDeleteHandler(author._id)}> Delete </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorReadAll;