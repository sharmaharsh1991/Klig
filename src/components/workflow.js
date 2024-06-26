import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const proOptions = { hideAttribution: true };

const initialNodes = [
  {
    id: "start",
    sourcePosition: "right",
    targetPosition: "left",
    type: "input",
    data: { label: "Start" },
    position: { x: 280, y: -150 },
  },
  {
    id: "nodes",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "K8s Nodes" },
    position: { x: 60, y: 10 },
  },
  {
    id: "ports",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Scan for Ports Exposed" },
    position: { x: 270, y: 0 },
  },
  {
    id: "leaked",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Leaked Ports Found" },
    position: { x: 500, y: 0 },
  },
  {
    id: "clean",
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: "Clean" },
    position: { x: 200, y: 100 },
  },
  {
    id: "slack",
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: "Slack" },
    position: { x: 500, y: 230 },
  },
];

const initialEdges = [
  {
    id: "start-e1-1",
    source: "start",
    type: "smoothstep",
    target: "nodes",
    animated: true,
  },
  {
    id: "nodes-e1-2",
    source: "nodes",
    type: "smoothstep",
    target: "ports",
    animated: true,
  },
  {
    id: "ports-e1-3",
    source: "ports",
    type: "smoothstep",
    target: "leaked",
    animated: true,
  },
  {
    id: "leaked-e3-4",
    source: "leaked",
    type: "smoothstep",
    target: "clean",
    animated: true,
  },
  {
    id: "clean-e3-5",
    source: "clean",
    type: "smoothstep",
    target: "slack",
    animated: true,
  },
  {
    id: "slack-e3-6",
    source: "slack-6",
    type: "smoothstep",
    target: "slack",
    animated: true,
  },
];

const ReactFlowStyled = styled(ReactFlow)(({ theme }) => ({
  "& .react-flow__node-default.selectable.selected": {
    boxShadow: "0px 0px 0px 1px #1a192b",
  },

  "& .react-flow__node:first-of-type": {
    backgroundColor: "#FFF1C5",
    borderColor: "#F6E8BC",
  },
  "& .react-flow__node:nth-of-type(2)": {
    backgroundColor: "#F1EDEE",
    borderColor: "#E7E3E4",
  },
  "& .react-flow__node:nth-of-type(3)": {
    backgroundColor: "#FFCADD",
    borderColor: "#F5C0D3",
  },
  "& .react-flow__node:nth-of-type(4)": {
    backgroundColor: "#C7EEFF",
    borderColor: "#BDE4F5",
  },
  "& .react-flow__node:nth-of-type(5)": {
    backgroundColor: "#E7CAFF",
    borderColor: "#DDC0F5",
  },
  "& .react-flow__node:nth-of-type(6)": {
    backgroundColor: "#D0F1CF",
    borderColor: "#C6E7C5",
  },
  "& .react-flow__node:nth-of-type(7)": {
    backgroundColor: "#FFF1C5",
    borderColor: "#F6E8BC",
  },
  "& .react-flow__node:nth-of-type(8)": {
    backgroundColor: "#FFF1C5",
    borderColor: "#F6E8BC",
  },
}));

const WorkflowDiagram = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );



  return (
    <Paper
      elevation={0}
      sx={{
        with: "100%",
        height: "100%",
        boxShadow:
          "rgb(26 25 43 / 2%) 0px 2.8px 2.2px,rgb(26 25 43 / 2%) 0px 12.5px 10px,rgb(26 25 43 / 2%) 0px 22.3px 17.9px,rgb(26 25 43 / 3%) 0px 41.8px 33.4px,rgb(26 25 43 / 2%) 0px 100px 80px",
        borderRadius: "0.75rem",
      }}
    >
      <ReactFlowStyled
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        proOptions={proOptions}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlowStyled>
    </Paper>
  );
};

export default WorkflowDiagram;
