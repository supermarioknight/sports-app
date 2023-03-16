import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";

import { updateNode } from "../../app/Events/events.actionCreators";

import "./deliver-node.css";

const DeliverNode = ({ id }) => {
  const dispatch = useDispatch();
  const [nodeFormData, setNodeFormData] = useState({
    teamValue: "",
    action: "",
    objectValue: "",
    totalDeliveryCount: 0,
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
    <div className="deliver-node-container">
      <Handle type="target" position={Position.Top} />
      <div className="deliver-node-content-wrapper">
        <div className="node-header">
          <div className="node-title">Deliver</div>
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
                  id="pitch"
                  type="radio"
                  name="action"
                  value="pitch"
                  checked={nodeFormData.action === "pitch"}
                  onClick={handleChange}
                />
                <label for="pitch">Pitch</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="bowl"
                  type="radio"
                  name="action"
                  value="bowl"
                  checked={nodeFormData.action === "bowl"}
                  onClick={handleChange}
                />
                <label for="bowl">Bowl</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="kick"
                  type="radio"
                  name="action"
                  value="kick"
                  checked={nodeFormData.action === "kick"}
                  onClick={handleChange}
                />
                <label for="kick">Kick</label>
              </div>
              <div className="node-field action-field-option">
                <input
                  id="pass"
                  type="radio"
                  name="action"
                  value="pass"
                  checked={nodeFormData.action === "pass"}
                  onClick={handleChange}
                />
                <label for="pass">Pass</label>
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
          <div className="node-field">
            <div className="node-field field-label">Total Delivery Count:</div>
            <input
              type="number"
              name="totalDeliveryCount"
              placeholder="Enter Total Count"
              value={nodeFormData.totalDeliveryCount}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default DeliverNode;
