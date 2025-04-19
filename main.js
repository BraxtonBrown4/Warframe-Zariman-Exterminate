import { ZarimanBountyFinder } from "./ZarimanBountyFinder.js"
import { GenerateEmbed } from "./GenerateEmbed.js"
import { WFMessage } from "./MessageFunc.js"

const bountyInfo = await ZarimanBountyFinder()

if (bountyInfo !== null) {
    WFMessage(GenerateEmbed(bountyInfo))
}



// need to hook up git timer, message system, and embeds