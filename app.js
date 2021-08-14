const wppconnect = require("@wppconnect-team/wppconnect");
const { onMessages } = require("./src/functions/onMessage");

let phoneStatus = "LOADING";
const startAPI = async () => {
  wppconnect
    .create(
      "",
      () => {
        console.log(`code scan`);
      },
      (statusSession) => {
        console.log(`Session changed: ${statusSession}`);
        phoneStatus = statusSession;
        global.phoneStatus = phoneStatus;
      },
      {
        session: "oi",
        useChrome: false,
        logQR: true,
        browserArgs: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36",
          "--no-zygote",
        ],
        disableSpins: true,
        disableWelcome: true,
        createPathFileToken: false,
        headless: false,
        autoClose: false,
        tokenStore: "file",
        devtools: false,
        updatesLog: true,
        puppeteerOptions: {
          userDataDir: "./tokens", // or your custom directory
        },
      }
    )
    .then((client) => {
      global.client = client;
      start(client);
    })
    .catch((erro) => {
      console.log("Erro ao iniciar wc", erro);
    });
  const start = async (client) => {
    try {
      //get number by localStorage
      const localStorageData = await client.waPage.evaluate(() => {
        let json = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          json[key] = localStorage.getItem(key);
        }
        return json;
      });

      const number = localStorageData["last-wid-md"]
        .toString()
        .split(":")[0]
        .replace('"', "");
      global.number = number;
      //Start wpp automation starts here.

      //getting messages
      onMessages(client);
    } catch (error) {
      console.log("Start error =>", error);
    }
  };
};
module.exports = startAPI;
