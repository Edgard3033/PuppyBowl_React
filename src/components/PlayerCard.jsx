export default function PlayerCard({ player }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <h3>Breed: {player.breed}</h3>
    </div>
  );
}
