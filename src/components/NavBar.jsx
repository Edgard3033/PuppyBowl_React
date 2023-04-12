import React, { useState } from "react";
import { addNewPlayer } from "../AjaxHelpers/puppies";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";

export default function NavBar({ setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const newDog = await addNewPlayer({ name, breed });
        const allPlayers = await fetchAllPlayers();
        setPlayers(allPlayers);
        console.log(newDog);
      }}
    >
      <label>Name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <label>Breed:</label>
      <input type="text" onChange={(e) => setBreed(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
