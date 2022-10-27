import React from 'react';
import {Nav} from "../../models/models";
import NavItem from "./NavItem";
import {SettingDropBtn} from "../../assets/svg/icon";



const NavGroup = (props : Nav) => {
    const [state, setState] = React.useState(false)
    return (
        <section className='nav-group'>
            <button className={state ? 'nav-drop-active nav-drop' : 'nav-drop'} onClick={() => setState(!state)}>
                <NavItem title={props.title} icon={props.icon}/>
                <SettingDropBtn/>
            </button>
            <section className={state ? 'nav-item-active ' : 'nav-item '}>
                {
                    props.submenu ?  props.submenu?.map((item) => <NavItem key={item.key} {...item}></NavItem>) : null
                }
            </section>
        </section>
    );
};

export default NavGroup;
