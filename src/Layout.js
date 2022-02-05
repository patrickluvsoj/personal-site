import {Outlet} from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {

    return (
        <div className="parent">
            <Header/>
            <div className="main">
              <Menu />
              <Outlet />
              {/* <Content className="content"/> */}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;




