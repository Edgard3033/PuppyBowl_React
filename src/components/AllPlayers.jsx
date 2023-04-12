import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";
import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";
import styles from "../css/AllPlayers.module.css";

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
    <div className={styles.container}>
      <NavBar setPlayers={setPlayers} />
      {players.map((player) => {
        return <PlayerCard key={player.id} player={player} />;
      })}
    </div>
  );
}
