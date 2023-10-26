import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from "./Mens";
import All from "./All";
import Women from "./Women";
import Kids from "./Kids";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="mens" element={<Mens />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="Kids" element={<Kids />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
