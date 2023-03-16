export const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const makeEvents = (actionNodeList = []) => {
  const eventsArray = actionNodeList.map((actionNode) => {
    const {
      label = "",
      info: {
        teamValue = "",
        action = "",
        objectValue = "",
        totalDeliveryCount = "",
        targetZone = "",
      },
    } = actionNode.data;

    return {
      event: label,
      objectExecuted: objectValue,
      ...(label === "Deliver" && { from: teamValue }),
      ...(label === "recieve" && { to: teamValue }),
      ...((label === "Deliver" || label === "recieve") && { action: action }),
      ...(label === "Deliver" && { totalDeliveriesMade: totalDeliveryCount }),
      ...(label === "Cross Boundry" && { targetZoneAquired: targetZone }),
    };
  });

  return eventsArray;
};
