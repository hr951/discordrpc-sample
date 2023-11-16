var rpc = require("discord-rpc");

// set clientId
const clientId = "1170239764251807784";

// make client
const client = new rpc.Client({ transport: "ipc" });

	const date1 = new Date();
	const date2 = date1.getFullYear() + "年" + 
				(date1.getMonth() + 1)  + "月" + 
				date1.getDate() + "日" + 
				date1.getHours() + "時" + 
				date1.getMinutes() + "分" + 
				date1.getSeconds() + "秒"

client.on("ready", () => {
  client.setActivity({

    // text
    details: "＼(^o^)／ｵﾜﾀ",
    state: "Playing Solo",
    startTimestamp: new Date(),

    // image
    largeImageText: "Developed by hi_ro951",
    largeImageKey: "h-750",

    // partysize / partymax
    partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
    partySize: 1,
    partyMax: 1,

    // button
    buttons : [
      {
        label : "Lit Link", 
        url : "https://lit.link/hiro951"
      },
      {
        label : `起動時刻：${date2}`, 
        url : "https://github.com/hr951"
      }
    ]
  })
});

client.login({ clientId }).catch(console.error);
