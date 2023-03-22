import React from "react";
import { useSelector } from "react-redux";

import { baseActions, baseActivities } from "../../Constants";
import { downloadFile, makeReportJson } from "../../Utils";

import "./side-bar.css";

const SideBar = ({ onAddNode }) => {
  const nodeList = useSelector((state) => state.events.nodes);

  const handleNodeSelect = (newNode) => {
    const nodeId = `${nodeList.length + 1}`;
    onAddNode({...newNode, id: nodeId });
  };

  const makeNodeList = (actions) => {
    return actions.map((node) => {
      return (
        <button onClick={() => handleNodeSelect(node)}>
          {node.data.label}
        </button>
      );
    });
  };

  const exportToJson = (e) => {
    e.preventDefault();
    const builtJsonReport = makeReportJson(nodeList);
    downloadFile({
      data: JSON.stringify({ report: builtJsonReport }),
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
