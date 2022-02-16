import React from "react";
import { useSelector } from "react-redux";

export default function MultipliedByTwo() {
  const count = useSelector((state) => state.count.value);
  return <div>Muliplied nymber: {count * 2}</div>;
}
