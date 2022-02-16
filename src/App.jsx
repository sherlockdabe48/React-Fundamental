import { useState } from "react";
import CalculationOverView from "./components/CalculationOverView";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <h1>Multiplied By Two App</h1>
      <Input />
      <CalculationOverView />
    </>
  );
}
