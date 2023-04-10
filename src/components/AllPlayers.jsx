import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";
import PlayerCard from "./PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function getAllPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    getAllPlayers();
  }, []);
  return (
    <div>
      {players.map((player) => {
        return <PlayerCard player={player} />;
      })}
    </div>
  );
}
