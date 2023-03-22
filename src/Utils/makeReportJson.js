export const makeReportJson = (data) => {
  const eventReport = {
    activityType: "",
    activityName: "",
    teamsPlaying: [],
    deliveries: [],
    receives: [],
    actions: {
      scorings: [],
      blocks: [],
    },
  };
  data.map((node) => {
    const { type = "", data = {} } = node;

    if(type === "TEAM_SPORTS_BALL_GAME") {
        eventReport.activityType = type;
        eventReport.activityName = data.info.activityName
        eventReport.teamsPlaying.push({
            id: "1",
            name: data.info.team1
        })
        eventReport.teamsPlaying.push({
            id: "2",
            name: data.info.team2
        })
    }
    if(type === "DELIVER") {
        eventReport.deliveries.push(node)
    }
    if(type === "RECEIVE") {
        eventReport.receives.push(node)
    }
    if(type === "CROSS_BOUNDARY") {
        eventReport.actions.scorings.push(node)
    }
    if(type === "BLOCK") {
        eventReport.actions.blocks.push(node)
    }
  });

  return eventReport;
};
