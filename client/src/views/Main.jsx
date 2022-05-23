import React, { useEffect, useState,  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthorReadAll from '../components/AuthorReadAll';

const Main = () => {

    const [authors, setAuthors] = useState();

    const [refresh, setRefresh] = useState(true);

    const reloadList = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Authors`)
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err))
    }, [refresh]);

    return (
        <>
            <Link to="/author/create">Add an author</Link>
            <p> We have quotes by: </p>
            <AuthorReadAll authors = {authors} reloadList = {reloadList}/>
        </>
    )
}

export default Main;