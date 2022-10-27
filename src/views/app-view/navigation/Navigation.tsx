import React, {FC} from 'react';
import NavItem from "../../../components/layout-components/NavItem";
import navigationConfig from "../../../configs/NavigationConfig";
import NavGroup from "../../../components/layout-components/NavGroup";

const Navigation:FC = () => {
    return (
        <nav className="nav">
            <h1>Меню</h1>
            <ul>
                {
                    navigationConfig.map(item =>
                        (item.submenu.length > 0 ? <NavGroup  {...item}/> : <NavItem key={item.key} path={item.path} title={item.title} icon={item.icon} submenu={item.submenu}/>)
                    )
                }
            </ul>
        </nav>
    );
};

export default Navigation;
