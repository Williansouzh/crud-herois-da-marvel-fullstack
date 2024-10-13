import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router here
import Home from "./pages/Home";
import HeroDetail from "./pages/HeroDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<HeroDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
