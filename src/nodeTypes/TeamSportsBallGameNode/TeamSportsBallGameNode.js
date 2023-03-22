import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { updateNode } from "../../app/Events/events.actionCreators";

import './team-sport-ball-game-node.css'


const TeamSportsBallGameNode = ({ id }) => {
  const dispatch = useDispatch();
  const [nodeFormData, setNodeFormData] = useState({
    activityName: "",
    team1: "",
    team2: "",
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
    <div className="team-sport-ball-game-node-container">
      <Handle type="target" position={Position.Top} />
      <div className="team-sport-ball-game-node-content-wrapper">
        <div className="node-header">
          <div className="node-title">Team Sports Ball Game</div>
        </div>
        <div className="node-body">
          <div className="node-field">
            <div className="node-field field-label">Activity:</div>
            <input
              type="text"
              name="activityName"
              placeholder="Enter Team value"
              value={nodeFormData.activityName}
              onChange={handleChange}
            />
          </div>
          <div className="node-field">
            <div className="node-field field-label">Team 1:</div>
            <input
              type="text"
              name="team1"
              placeholder="Enter Object value"
              value={nodeFormData.team1}
              onChange={handleChange}
            />
          </div>
          <div className="node-field">
            <div className="node-field field-label">Team 2:</div>
            <input
              type="text"
              name="team2"
              placeholder="Enter Object value"
              value={nodeFormData.team2}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default TeamSportsBallGameNode;
