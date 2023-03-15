import React, { useCallback } from "react";
import { useNodesState, useEdgesState, addEdge } from "reactflow";
import { Grid, Box } from "@mui/material";
import FlowGraph from "../../components/FlowGraph";
import SideBar from "../../components/Sidebar/SideBar";
import DarkNode from "../../nodeTypes/DarkNode/DarkNode";

const initialNodes = [
//   { id: "1", position: { x: 371, y: 92 }, data: { label: "Event-1 (IF New Guard)" } },
//   { id: "2", position: {x: 448, y: 97}, data: { label: "Bowling" } },
//   { id: "3", position: {x: 346, y: 291}, data: { label: "New State 3" } },
//   { id: "4", position: {x: 771, y: 604}, data: { label: "Batter Reaction" } },
//   { id: "5", position: {x: 534, y: 389}, data: { label: "New State 1" } },
//   { id: "6", position: {x: 625, y: 496}, data: { label: "New State 2" } },
//   { id: "7", position: {x: 300, y: 443}, data: { label: "New State 4" } },
//   { id: "8", position: {x: 439, y: 617}, data: { label: "New State 6" } },
//   { id: "9", position: {x: 181, y: 608}, data: { label: "New State 7" } },
//   { id: "10", position: {x: 570, y: 764}, data: { label: "Ball travels beyond distance" } },
//   { id: "11", position: {x: 321, y: 777}, data: { label: "New State 9" } },
];
const initialEdges = [
    // { id: "e1-2", source: "1", target: "2" },
    // { id: "e2-4", source: "2", target: "4", label: "Event-1 (IF New Guard)" },
    // { id: "e2-3", source: "2", target: "3", label: "Ball in Air" },
    // { id: "e1-4", source: "1", target: "4", },
    // { id: "e5-6", source: "5", target: "6", label: "Event 1" },
    // { id: "e6-4", source: "6", target: "4", },
    // { id: "e3-7", source: "3", target: "7", label: "Batter Action"},
    // { id: "e7-9", source: "7", target: "9", label: "Swing"},
    // { id: "e7-8", source: "7", target: "8", label: "No Swing"},
    // { id: "e8-10", source: "8", target: "10", label: "Hit"},
    // { id: "e8-11", source: "8", target: "11", label: "No Hit"},
]; // edge format :: { id: "e1-2", source: "1", target: "2" }

const nodeTypes = {
  darkNode: DarkNode,
};

const FlowBuilderPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      console.log("these are the params on onConnect ---> ", { params });
      return setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onAddNode = (nodeData) => {
    // add node here
    const newNodeObject = {
      ...nodeData,
      id: `${nodes.length + 1}`,
      position: { x: 200, y: 200 },
    };
    setNodes([...nodes, newNodeObject]);
  };

  console.log("this is the node Data ===> ", { nodes, edges });
  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid item xs={9}>
          <FlowGraph
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          />
        </Grid>
        <Grid item xs={3}>
          <SideBar onAddNode={onAddNode} />
        </Grid>
      </Grid>
    </>
  );
};

export default FlowBuilderPage;
