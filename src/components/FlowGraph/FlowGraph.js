import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";

const FlowGraph = ({nodes = [], edges = [], onNodesChange, onEdgesChange, onConnect, nodeTypes = {}}) => {

    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={{
            animated: true,
            style: {
              stroke: 'black',
            },
          }}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
  );
};

export default FlowGraph;
