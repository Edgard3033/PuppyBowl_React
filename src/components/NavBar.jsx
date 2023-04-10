import React from "react";

export default function NavBar() {
  function buttonClick() {
    preventDefalut();
  }
  return (
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name"></input>
      <label for="breed">Breed:</label>
      <input type="text" name="breed"></input>
      <button onClick={buttonClick} type="submit">
        Submit
      </button>
    </form>
  );
}
