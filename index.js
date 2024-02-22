var rpc = require("discord-rpc");
const clientId = "Bot Client ID";
const client = new rpc.Client({ transport: "ipc" });
const ver = "1.1.3";

client.on("ready", () => {
  client.setActivity({

    // text
    details: "孤独をプレイ中",
    state: "Playing Solo",
    startTimestamp: new Date(),

    // image
    largeImageText: `ver.${ver}`,
    largeImageKey: "ImageID",
    smallImageText: "Text",
    smallImageKey: "ImageID",

    // partysize / partymax
    partyId: "ab5a967e-0c91-4cda-a7c7-292f346c2eb8",
    partySize: 1,
    partyMax: 1,

    // button
    buttons : [
      {
        label : "Text1", 
        url : "URL1"
      },
      {
        label : `Text2`, 
        url : "URL2"
      }
    ]
  })
});

console.log(`起動しました。(ver.${ver})`);

client.login({ clientId }).catch(console.error);
