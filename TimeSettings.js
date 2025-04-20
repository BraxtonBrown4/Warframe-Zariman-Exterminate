import { WFMessage } from "./MessageFunc.js"

const currentTime = new Date().getHours()

export const timeSettings = (message) => {
    if (currentTime >= 15 || currentTime <= 4) {
            WFMessage(message)
    } else {
        console.log('Warframe Zariman Exterminate is not messaging right now due to nighttime restrictions.')
    }
}