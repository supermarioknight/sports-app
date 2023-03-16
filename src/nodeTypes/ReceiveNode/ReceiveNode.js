import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { updateNode } from "../../app/Events/events.actionCreators";

import "./receive-node.css";

const ReceiveNode = ({ id }) => {
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
    <div className="receive-node-container">
      <Handle type="target" position={Position.Top} />
      <div className="receive-node-content-wrapper">
        <div className="node-header">
          <div className="node-title">Receive</div>
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
                  id="swing"
                  type="radio"
                  name="action"
                  value="swing"
                  checked={nodeFormData.action === "swing"}
                  onClick={handleChange}
                />
                <label for="swing">Swing</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="evade"
                  type="radio"
                  name="action"
                  value="evade"
                  checked={nodeFormData.action === "evade"}
                  onClick={handleChange}
                />
                <label for="evade">Evade</label>
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

export default ReceiveNode;
