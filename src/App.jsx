import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import Landing from "./page/Landing";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {}, [authenticate]);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
