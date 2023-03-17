import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";

import { updateNode } from "../../app/Events/events.actionCreators";

import "./cross-boundary-node.css";

const CrossBoundaryNode = ({ id }) => {
  const dispatch = useDispatch();
  const [nodeFormData, setNodeFormData] = useState({
    objectValue: "",
    targetZone: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    const updatedNodeFormData = {
      ...nodeFormData,
      [name]: value,
    };
    setNodeFormData(updatedNodeFormData);
    dispatch(updateNode({ info: updatedNodeFormData, nodeId: id }));
  };

  return (
    <div className="cross-boundary-node-container">
      <Handle type="target" position={Position.Top} />
      <div className="cross-boundary-node-content-wrapper">
        <div className="node-header">
          <div className="node-title">CrossBoundary</div>
        </div>
        <div className="node-body">
          <div className="node-field">
            <div className="node-field field-label">Object:</div>
            <input
              type="text"
              name="objectValue"
              placeholder="Person/Ball"
              value={nodeFormData.objectValue}
              onChange={handleChange}
            />
          </div>
          <div className="node-field">
            <div className="node-field field-label">Target/Zone:</div>
            <input
              type="text"
              name="targetZone"
              placeholder="Goal/Line/Basket"
              value={nodeFormData.targetZone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CrossBoundaryNode;
