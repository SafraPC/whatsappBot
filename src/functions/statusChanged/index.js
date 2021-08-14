const statusChanged = async (status) => {
  try {
    const client = global.client;
    console.log("Status changed: => " + status);
  } catch (error) {
    console.log("Send message status change =>", error);
    return false;
  }
};

module.exports = { statusChanged };
