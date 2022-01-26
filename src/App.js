import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="parent">
        <Header/>
        <div className="main">
          <Menu />
          <Content className="content"/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
