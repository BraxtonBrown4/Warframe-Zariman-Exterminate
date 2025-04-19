import { ZarimanBountyFinder } from "./ZarimanBountyFinder.js"
import { GenerateEmbed } from "./GenerateEmbed.js"
import { timeSettings } from "./TimeSettings.js"

const bountyInfo = await ZarimanBountyFinder()

if (bountyInfo !== null) {
    timeSettings(GenerateEmbed(bountyInfo))
}