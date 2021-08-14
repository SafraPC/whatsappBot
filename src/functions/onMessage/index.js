const onMessages = async (client) => {
  try {
    await client.onMessage((message) => {
      if (!message.isGroupMsg) {
        const senderName = message.sender.pushname;
        const senderNumber = message.sender.id;
        if (message.type === "chat") {
          console.log(senderName, senderNumber, message.body);
          return;
        }
        if (message.type === "ptt") {
          if (message.mimetype.split("/")[0] === "audio") {
            console.log(
              senderName,
              senderNumber,
              `
            Você está falando com uma automação! 
            
            ${senderName}, infelizmente não conseguiremos processar audios ainda..
            `
            );
            return;
          } else {
            console.log(
              senderName,
              senderNumber,
              `
            Você está falando com uma automação! 
            
            ${senderName}, infelizmente não conseguiremos processar essa informação ainda..
            `
            );
            return;
          }
        }
        if (message.type === "image") {
          console.log(
            senderName,
            senderNumber,
            `
        Você está falando com uma automação! 
        
        ${senderName}, infelizmente não conseguiremos processar imagens ainda..
        `
          );
          return;
        }
        if (message.type === "video") {
          console.log(
            senderName,
            senderNumber,
            `
        Você está falando com uma automação! 
        
        ${senderName}, infelizmente não conseguiremos processar videos ainda..
        `
          );
          return;
        }
        if (message.type === "vcard") {
          console.log(
            senderName,
            senderNumber,
            `
            Você está falando com uma automação! 
            
            ${senderName}, infelizmente não conseguiremos processar vcards ainda..
            `
          );
          return;
        }
        console.log(
          senderName,
          senderNumber,
          `
            Você está falando com uma automação! 
            
            ${senderName}, infelizmente não conseguiremos processar essa informação ainda..
            `
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
