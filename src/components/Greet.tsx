import React from "react";
import { useParams } from "react-router-dom";

function Greet() {
  const { name } = useParams<{ name: string }>();

  return <div>Hello there, {name}</div>;
}

export default Greet;
