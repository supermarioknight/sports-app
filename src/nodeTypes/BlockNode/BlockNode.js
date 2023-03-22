import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { updateNode } from "../../app/Events/events.actionCreators";

import "./block-node.css";

const BlockNode = ({ id }) => {
  const dispatch = useDispatch();
  const [nodeFormData, setNodeFormData] = useState({
    teamValue: "",
    action: "",
    objectValue: "",
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
    <div className="block-node-container">
      <Handle type="target" position={Position.Top} />
      <div className="block-node-content-wrapper">
        <div className="node-header">
          <div className="node-title">Block</div>
        </div>
        <div className="node-body">
          <div className="node-field">
            <div className="node-field field-label">Team A/B/Individual:</div>
            <input
              type="text"
              name="teamValue"
              placeholder="Enter Team value"
              value={nodeFormData.teamValue}
              onChange={handleChange}
            />
          </div>
          <div className="node-field">
            <div className="node-field field-label">Action:</div>
            <div className="action-field">
              <div className="node-field action-field-option">
                <input
                  id="out"
                  type="radio"
                  name="action"
                  value="out"
                  checked={nodeFormData.action === "out"}
                  onClick={handleChange}
                />
                <label for="out">Out</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="miss"
                  type="radio"
                  name="action"
                  value="miss"
                  checked={nodeFormData.action === "miss"}
                  onClick={handleChange}
                />
                <label for="miss">Miss</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="block"
                  type="radio"
                  name="action"
                  value="block"
                  checked={nodeFormData.action === "block"}
                  onClick={handleChange}
                />
                <label for="block">Block</label>
              </div>
            </div>
          </div>
          <div className="node-field">
            <div className="node-field field-label">Object:</div>
            <input
              type="text"
              name="objectValue"
              placeholder="Enter Object value"
              value={nodeFormData.objectValue}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default BlockNode;
