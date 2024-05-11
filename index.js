const gkm = require("gkm");
const { runSync } = require("node-cmd");

new Promise((r) => setTimeout(r, 20000)).then(() => console.log("r"));
console.log(43);
const kill = () => {
  console.log(runSync("taskkill /IM game.exe /F"));
};

gkm.events.on("key.*", function ([key]) {
  // console.log(this.event, key);
  if (this.event === "key.pressed" && key === "Pause") {
    kill();
  }
});
