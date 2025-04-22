import { WFMessage } from "./MessageFunc.js"

const now = new Date();

const options = {
  timeZone: "America/Chicago",
  hour: "numeric",
  hour12: false,
};

const formatter = new Intl.DateTimeFormat("en-US", options);
const currentTime = parseInt(formatter.format(now));

export const timeSettings = (message) => {
    if (currentTime >= 10 && currentTime <= 22) {
            WFMessage(message)
    } else {
        console.log('Warframe Zariman Exterminate is not messaging right now due to nighttime restrictions.')
    }
}