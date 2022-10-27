import React from 'react';
import {Nav} from "../../models/models";
import {Link} from "react-router-dom";

const NavItem = ({path,title,icon} : Nav)  => {
    return (
        <>
            {
                path ? <Link to={path}>
                    <li>
                        {icon}
                        <h2>{title}</h2>
                    </li>
                </Link> : <li>
                    {icon}
                    <h2>{title}</h2>
                </li>
            }
        </>
    );
};

export default NavItem;
