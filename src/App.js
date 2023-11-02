import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Remove the unused 'json' import
import Mens from "./Mens";
import All from "./All";
import Women from "./Women";
import Kids from "./Kids";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);

  const fetchData = (apiUrl, setData) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((Data) => {
        setData(Data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    fetchData("http://localhost:3004/dresses", setAllData);
    fetchData("http://localhost:3004/menDresses", setMenData);
    fetchData("http://localhost:3004/womenDresses", setWomenData);
    fetchData("http://localhost:3004/kidsDresses", setKidsData);
  }, []);

  const getData = (data) => {
    console.table(data);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All allData={allData} onBuy={getData} />} />
          <Route
            path="mens"
            element={<Mens menData={menData} onBuy={getData} />}
          />
          <Route
            path="women"
            element={<Women womenData={womenData} onBuy={getData} />}
          />
          <Route
            path="kids"
            element={<Kids kidsData={kidsData} onBuy={getData} />}
          />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
