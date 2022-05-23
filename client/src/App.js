import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './views/Main';
import AuthorCreateOne from './components/AuthorCreateOne';
import AuthorUpdateOne from './components/AuthorUpdateOne';

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>

      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/author/create" element={<AuthorCreateOne />} />
        <Route path="/author/update/:id" element={<AuthorUpdateOne />} />



        {/* <Route path="*" element = {<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
