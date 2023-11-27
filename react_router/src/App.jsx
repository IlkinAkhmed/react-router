import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details/Details";
import Shop from "./Components/Shop.jsx";
import Layouts from "./layouts";
import Login from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route path='/shop' element={<Shop />} />
          <Route path="/details/:ProductId" element={<Details />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
