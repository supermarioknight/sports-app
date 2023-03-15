import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import "./dark-node.css";

const onConnect = (params) => console.log("handle onConnect", params);

const DarkNode = ({ data }) => {
  const { label } = data;
  return (
    <>
      <Handle type="target" position={Position.Left} onConnect={onConnect} />
      <div>{label}</div>
      <Handle type="target" position={Position.Left} onConnect={onConnect} />
    </>
  );
};

export default memo(DarkNode);
