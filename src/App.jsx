import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div>
      <NavBar />
      <AllPlayers />
      <Routes>
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
