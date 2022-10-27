import React, {FC} from 'react';
import Header from "../../../components/layout-components/Header";
import Navigation from "../navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Address from "../address/Address";

const Home:FC = () => {
    return (
        <>
            <Header/>
            <section className="content">
                <Navigation/>
                <main className="main">
                    <Routes>
                        <Route path="/address" element={<Address/>}/>
                    </Routes>
                </main>
            </section>
        </>
    );
};

export default Home;
