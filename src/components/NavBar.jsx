import React, { useState } from "react";
import { addNewPlayer } from "../AjaxHelpers/puppies";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";
import styles from "../css/NavBar.module.css";

export default function NavBar({ setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        const newDog = await addNewPlayer({ name, breed });
        const allPlayers = await fetchAllPlayers();
        setPlayers(allPlayers);
        console.log(newDog);
      }}
    >
      <label className={styles.label}>Name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <label className={styles.label}>Breed:</label>
      <input type="text" onChange={(e) => setBreed(e.target.value)}></input>
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
}
