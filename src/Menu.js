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
                        <NavLink className="menu-item-txt" to="writings">Writings</NavLink>
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