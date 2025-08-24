import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navber } from "./components/Navber";
import { MainPages } from "./MainPages";

function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element= {<MainPages></MainPages>}></Route>
      </Routes>
    </div>
  );
}

export default App;
