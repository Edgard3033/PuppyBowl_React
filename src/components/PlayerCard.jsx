import React from "react";
import styles from "../css/playerCard.module.css";

export default function PlayerCard({ player }) {
  return (
    <div key={player.id} className={styles.container}>
      <h2 className={styles.name}>
        {player.name} {player.id}
      </h2>
      {/* <h3>{player.imageUrl}</h3> */}
      <img
        className={styles.pupPic}
        src={player.imageUrl}
        alt="picture of player"
      />
      <button>See Details</button>
    </div>
  );
}
