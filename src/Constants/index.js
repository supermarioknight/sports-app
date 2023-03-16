export const baseActivities = [
  {
    data: { label: "Team Sports Ball Games" },
  },
  {
    data: { label: "1v1 Sports Ball Games" },
  },
];

export const baseActions = [
  {
    data: {
      label: "Ball Actions",
      options: [
        {
          data: { label: "Deliver" },
          type: "deliverNode",
        },
        {
          data: { label: "recieve" },
          type: "receiveNode",
        },
      ],
    },
  },
  {
    data: {
      label: "Scoring Actions",
      options: [
        {
          data: { label: "Cross Boundry" },
          type: "crossBoundaryNode",
        },
      ],
    },
  },
];
