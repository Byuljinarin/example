import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./page/home";
import About from "./page/about";
import Sample from "./page/sample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default App;
