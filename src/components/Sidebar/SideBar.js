import React from "react";

import "./side-bar.css";

const ballTypeNodes = [
  {
    data: { label: "New State 1" },
  },
  {
    data: { label: "New State 2" },
  },
  {
    data: { label: "New State 3" },
  },
  {
    data: { label: "New State 4" },
  },
  {
    data: { label: "New State 6" },
  },
  {
    data: { label: "New State 7" },
  },
  {
    data: { label: "New State 9" },
  },
  {
    data: { label: "Batter Reaction" },
  },
  {
    data: { label: "Bowling" },
  },
  {
    data: { label: "Ball travel beyond distance" },
  },
];

const SideBar = ({ onAddNode }) => {
  const handleNodeSelect = (newNode) => {
    console.log("handling New node addition", { node: newNode });
    onAddNode(newNode);
  };
  return (
    <div className="side-bar-container">
      <div className="side-bar-title">Samples</div>
      <div className="side-bar-sample-list">
        {ballTypeNodes.map((node) => {
          return (
            <button onClick={() => handleNodeSelect(node)}>
              {node.data.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
