const { sleep } = require("../sleep/index");
const willSendText = async (
  client,
  senderName,
  senderNumber,
  process,
  message
) => {
  try {
    //will send a specific message
    await sleep(1000);
    if (process) {
      client.sendText(
        senderNumber,
        `Olá, ${senderName}.
${message}   
        `
      );
      return;
    }
    await sleep(1000);
    client.sendText(
      senderNumber,
      `Olá, ${senderName}.
Fico feliz de ter entrado em contato! agradeço.   
        `
    );
    return;
  } catch (error) {
    console.log("Erro ao enviar mensagem =>", error);
    return false;
  }
};

module.exports = { willSendText };
