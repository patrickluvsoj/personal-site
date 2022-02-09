import {NavLink, Outlet} from "react-router-dom";


function Menu() {

    return (
        <div className="menu">
            <input type="checkbox" id="menu-collapsed"/>
            <div className="menu-switch">
                <label className="collapse" for="menu-collapsed">{'<<'}</label>
                <label className="expand" for="menu-collapsed">{'>>'}</label>
            </div>
            <nav className="menu-content">
                <ul>
                    <li className="menu-item">     
                        <NavLink className="menu-item-txt" to="about">About</NavLink>
                    </li>
                    <li className="menu-item">
                        <label className="menu-item-txt">Writings</label>
                        <ul className="child-list">
                            <li>
                                <NavLink to="deploying-to-github-pages">Deploying React app to Github Pages</NavLink>
                            </li>
                            <li>
                            <NavLink to="my-espresso-setup">My Espresso Setup</NavLink>
                            </li>
                            <li>
                                <NavLink to="my-tennis-setup">My tennis gear setup</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-item-txt" to="projects">Projects</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-item-txt" to="random">Random</NavLink>
                    </li>
                </ul>
            </nav>
        </div>        
    )
}

export default Menu