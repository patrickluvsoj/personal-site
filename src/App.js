import Layout from "./Layout";
import Content from "./Content";
import Writings from "./Writings";
import Projects from "./Projects";
import Random from "./Random";
import Article from "./Article";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />}/>
          <Route path="about" element={<Content />}/>
          <Route path="deploying-to-github-pages" element={<Article title="Github Pages" />}/>
          <Route path="my-espresso-setup" element={<Article title="Espresso Setup" />}/>
          <Route path="my-tennis-setup" element={<Article title="Tennis Setup" />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="random" element={<Random />}/>
        </Route>
    </Routes>
  );
}

export default App;
