import React from "react";
import { useSelector } from "react-redux";

import { baseActions, baseActivities } from "../../Constants";
import { downloadFile, makeEvents } from "../../Utils";

import "./side-bar.css";

const SideBar = ({ onAddNode }) => {
  const nodeList = useSelector((state) => state.events.nodes);

  const handleNodeSelect = (newNode) => {
    onAddNode(newNode);
  };

  const makeNodeList = (actions) => {
    return actions.map((node) => {
      const nodeId = `${nodeList.length + 1}`;
      return (
        <button onClick={() => handleNodeSelect({ ...node, id: nodeId })}>
          {node.data.label}
        </button>
      );
    });
  };

  const exportToJson = (e) => {
    e.preventDefault();
    const builtEvents = makeEvents(nodeList);
    downloadFile({
      data: JSON.stringify({ events: builtEvents }),
      fileName: "events.json",
      fileType: "text/json",
    });
  };

  return (
    <>
      <div className="side-bar-container">
        <div className="side-bar-title">Node Library</div>
        <div className="side-bar-section">
          <div className="side-bar-section-header">Base Activities</div>
          <div className="side-bar-sample-list">
            {baseActivities.map((node) => {
              return (
                <button onClick={() => handleNodeSelect(node)}>
                  {node.data.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="side-bar-section">
          <div className="side-bar-section-header">Base Actions</div>
          <div className="side-bar-sample-list">
            {baseActions.map((node) => {
              return (
                <div className="side-bar-section">
                  <div>{node.data.label}</div>
                  <div className="side-bar-sample-list">
                    {makeNodeList(node.data.options)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="side-bar-footer">
        <div className="footer-actions">
          <button onClick={(e) => exportToJson(e)} disabled={!nodeList.length}>
            Generate JSON
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
