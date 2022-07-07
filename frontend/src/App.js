import "./App.css";
import Navigationbar from "./components/Navigationbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Invoice from "./components/Invoice";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/invoice" element={<Invoice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
