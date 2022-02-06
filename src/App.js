import Layout from "./Layout";
import Content from "./Content";
import Writings from "./Writings";
import Projects from "./Projects";
import Random from "./Random";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />}/>
          <Route index path="/about" element={<Content />}/>
          <Route path="/writings" element={<Writings />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="random" element={<Random />}/>
        </Route>
    </Routes>
  );
}

export default App;
