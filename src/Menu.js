function Menu() {

    return (
        <div className="menu">
            <input type="checkbox" id="menu-collapsed"/>
            <div className="menu-switch">
                <label className="collapse" for="menu-collapsed">{'<<'}</label>
                <label className="expand" for="menu-collapsed">{'>>'}</label>
            </div>
            <div className="menu-content">
                <ul>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Writing</li>
                    <li className="menu-item">Projects</li>
                    <li className="menu-item">Random</li>
                </ul>
            </div>
        </div>        
    )
}

export default Menu