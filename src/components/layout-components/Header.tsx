import React, {FC} from 'react';
import {LoginSVG, LogoSVG} from "../../assets/svg/icon";
import {Link} from "react-router-dom";
const Header:FC = () => {
    return (
        <header className="header">
            <Link to='/'>
                <section className='header__side left-side'>
                    <LogoSVG/>
                    <h1>Wrench CRM</h1>
                </section>
            </Link>
            <section className='header__side right-side'>
                <LoginSVG/>
                <h1>Имя фамилия</h1>
            </section>
        </header>
    );
};

export default Header;
