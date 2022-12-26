import React from "react";
import { useSelector } from "react-redux";

const SameLevel = () => {
  const count = useSelector((state) => state.counter.count);

  return <div>SameLevel {count}</div>;
};

export default SameLevel;
