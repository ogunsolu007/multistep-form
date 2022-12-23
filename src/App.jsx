import Sidebar from "./container/sidebar/Sidebar";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Personal from "./container/main/personal/Personal";

const Shop = () => {
  return <p>example to text route</p>;
};

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
