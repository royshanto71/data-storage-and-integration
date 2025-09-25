import "./App.css";
import { Suspense } from "react";
import Bottles from "./Components/Bottles/Bottles";

const bottlesPromise = fetch("./bottles.json").then((response) =>
  response.json()
);

function App() {
  return (
    <>
      <h1 class="text-7xl font-bold text-center m-7">Hello world!</h1>
      <h1 style={{ textAlign: "center" }}>Best Water Bottles</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Bottles bottlesPromise={bottlesPromise} />
      </Suspense>
    </>
  );
}

export default App;
