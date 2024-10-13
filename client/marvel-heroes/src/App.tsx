import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroDetail from "./pages/HeroDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<HeroDetail />} />
    </Routes>
  );
}

export default App;
