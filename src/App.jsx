import useGame from "./context";

export default function App() {
  return <></>;
}

function field() {
  const { feild } = useGame();
  return (
    <ul style={{ fisplay: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {feild.map(isMole ? <Mole /> : <Hole />)}
    </ul>
  );
}
function Mole() {
  const { whack } = useGame();
  return (
    <p style={{ border: "1px solid red" }} onClick={() => whack()}>
      Mole
    </p>
  );
}
function Hole() {
  return <p>Hole</p>;
}
