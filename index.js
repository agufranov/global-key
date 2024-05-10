import { GlobalKeyboardListener } from "node-global-key-listener";
import * as cmd from "node-cmd";
const v = new GlobalKeyboardListener();

let modifier = false;

//Log every key that's pressed.
v.addListener(function (e, down) {
  // console.log(e.scanCode, e, down);
  if (e.scanCode === 160) {
    modifier = e.state === 'DOWN';
  }
  if (e.scanCode === 46 && modifier) {
    console.log("ee");
    console.log(cmd.default.runSync("taskkill /IM game.exe /F"));
  }
});
