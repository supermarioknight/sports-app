import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNodesState, useEdgesState, addEdge } from "reactflow";
import { Grid } from "@mui/material";

import FlowGraph from "../../components/FlowGraph";
import SideBar from "../../components/Sidebar/SideBar";
import NodeTypes from "../../nodeTypes";
import { saveNode } from "../../app/Events/events.actionCreators";

import "./flow-builder-page.css";

const FlowBuilderPage = () => {
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const initialNodes = useSelector((state) => state.events.nodes);
  const initialEdges = useSelector((state) => state.events.edges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  const onConnect = useCallback(
    (params) => {
      return setEdges((eds) => {
        return addEdge(params, eds);
      });
    },
    [setEdges]
  );

  const onAddNode = (nodeData) => {
    const newNodeObject = {
      ...nodeData,
      position: { x: 200, y: 200 },
    };
    setNodes([...nodes, newNodeObject]);
    dispatch(saveNode({ node: newNodeObject }));
  };

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
            nodeTypes={NodeTypes}
          />
        </Grid>
        <Grid item xs={3} className="library-section">
          <SideBar onAddNode={onAddNode} />
        </Grid>
      </Grid>
    </>
  );
};

export default FlowBuilderPage;
