const { willSendText } = require("../sendText");

const onMessages = async (client) => {
  try {
    await client.onMessage((message) => {
      if (!message.isGroupMsg) {
        const senderName = message.sender.pushname;
        const senderNumber = message.sender.id;
        if (message.type === "chat") {
          willSendText(client, senderName, senderNumber, false, message.body);
          return;
        }
        if (message.type === "ptt") {
          if (message.mimetype.split("/")[0] === "audio") {
            willSendText(
              client,
              senderName,
              senderNumber,
              true,
              `infelizmente não conseguimos processar audios ainda..
            `
            );
            return;
          } else {
            willSendText(
              client,
              senderName,
              senderNumber,
              true,
              "infelizmente não conseguimos processar essa informação ainda.."
            );
            return;
          }
        }
        if (message.type === "image") {
          willSendText(
            client,
            senderName,
            senderNumber,
            true,
            "infelizmente não conseguimos processar imagens ainda.."
          );
          return;
        }
        if (message.type === "video") {
          willSendText(
            client,
            senderName,
            senderNumber,
            true,
            "infelizmente não conseguimos processar videos ainda.."
          );
          return;
        }
        if (message.type === "vcard") {
          willSendText(
            client,
            senderName,
            senderNumber,
            true,
            "infelizmente não conseguimos processar vcards ainda.."
          );
          return;
        }
        willSendText(
          client,
          senderName,
          senderNumber,
          true,
          "infelizmente não conseguimos processar essa informação ainda.."
        );
        return;
      }
    });
  } catch (error) {
    console.log("onMessages error =>", error);
    return false;
  }
};

module.exports = { onMessages };
