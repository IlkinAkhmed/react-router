import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basket from "./Components/Basket/basket";
import Details from "./Components/Details/Details";
import Shop from "./Components/Shop.jsx";
import BasketProvider from "./Context/BasketContext";
import Layouts from "./layouts";
import Login from "./Login";

function App() {
  return (
    <BasketProvider>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Shop />} />
          <Route path="/details/:ProductId" element={<Details />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BasketProvider>
  );
}

export default App;
