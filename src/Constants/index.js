export const baseActivities = [
  {
    data: {
      label: "Team Sports Ball Games",
    },
    type: "TEAM_SPORTS_BALL_GAME",
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
          type: "DELIVER",
        },
        {
          data: { label: "recieve" },
          type: "RECEIVE",
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
          type: "CROSS_BOUNDARY",
        },
      ],
    },
  },
  {
    data: {
      label: "Blocking Actions",
      options: [
        {
          data: { label: "Block" },
          type: "BLOCK",
        },
      ],
    },
  },
];
