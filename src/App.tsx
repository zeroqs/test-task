import React, {FC} from 'react';
import './assets/styles/index.scss'
import {Routes, Route} from "react-router-dom";
import Home from "./views/app-view/home/Home";

const App:FC = () => {
  return (
    <>
        <Routes>
            <Route path="*" element={<Home/>}/>
        </Routes>

    </>
  );
}

export default App;
