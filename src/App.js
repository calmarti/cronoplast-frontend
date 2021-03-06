import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Detail from "./components/Detail/Detail";
import Contribute from "./components/Contribute/Contribute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Detail />} /> 
        <Route path="/contribute" element={<Contribute />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/*   <Route path="/donate" element={<Donate />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
