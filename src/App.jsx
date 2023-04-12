import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div>
      <h1>Puppy Bowl</h1>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
