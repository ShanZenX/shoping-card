import "./App.css";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Mens from "./Mens";
import All from "./All";
import Women from "./Women";
import Kids from "./Kids";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  // const API = "http://localhost:3004";

  // const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch(API)
  //     .then((dressData) => dressData.json())
  //     .catch((err) => console.log("error"));
  //   setData(json);
  //   console.log({ dressData });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
