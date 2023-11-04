// discord-rpcをインポート
var rpc = require("discord-rpc");

// クライアントIDを設定
const clientId = "1094581121490104361";

// RPCクライアントを作成
const client = new rpc.Client({ transport: "ipc" });

// クライアントが準備できたら
client.on("ready", () => {
 client.setActivity({
  details: "test",
  state: "てすと",
  startTimestamp: new Date(),

  largeImageText: "This is test",
  largeImageKey: "h-750",
  smallImageText: "aaaa",
  smallImageText: "h-750",

  partyId: "6d70795f-a07a-422f-98b3-a93a09a85aed",
  partySize: 99,
  partyMax: 1,
 })
});

// クライアントにログイン
client.login({ clientId }).catch(console.error);
