var rpc = require("discord-rpc");
const fs = require('fs');
const clientId = "Bot Client ID";
const client = new rpc.Client({ transport: "ipc" });
var text = fs.readFileSync('discordRPC-profile.txt', 'utf8');

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
    details: `${text}`,
    state: "Playing Solo",
    startTimestamp: new Date(),

    // image
    largeImageText: "ver.1.1.0",
    largeImageKey: "r_skin",
    smallImageText: "Developed by hi_ro951",
    smallImageKey: "h-750",

    // partysize / partymax
    partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
    partySize: 1,
    partyMax: 1,

    // button
    buttons : [
      {
        label : "LitLink", //ボタン1
        url : "https://lit.link/hiro951"
      },
      {
        label : `起動時刻：${date2}`, //ボタン2
        url : "https://github.com/hr951"
      }
    ]
  })
});

console.log(`起動しました。(ver.1.1.0)\n起動時刻：${date2}`)

client.login({ clientId }).catch(console.error);
