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
    largeImageKey: "r_skin",
    smallImageText: "Developed by hi_ro951",
    smallImageKey: "h-750",

    // partysize / partymax
    partyId: "ab5a967e-0c91-4cda-a7c7-292f346c2eb8",
    partySize: 1,
    partyMax: 1,

    // button
    buttons : [
      {
        label : "LitLink", 
        url : "https://lit.link/hiro951"
      },
      {
        label : `DiscordRPC Sample`, 
        url : "https://github.com/hr951/discordrpc-sample"
      }
    ]
  })
});

console.log(`起動しました。(ver.${ver})`);

client.login({ clientId }).catch(console.error);
