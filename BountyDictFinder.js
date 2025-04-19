import { BountyDictDesc } from "./subDicts/BountyDictDesc.js"
import { BountyDictIcon } from "./subDicts/BountyDictIcon.js"
import { BountyDictName } from "./subDicts/BountyDictName.js"

export const BountyDictFinder = async (challengeST) => {
    const challengeDictURL = 'https://browse.wf/warframe-public-export-plus/ExportChallenges.json'

    try {
        const challengeDictResponse = await fetch(challengeDictURL)

        if (!challengeDictResponse.ok) {
            throw new Error(`HTTP error! Status: ${challengeDictResponse.status}`)
        }

        const challengeDict = await challengeDictResponse.json()

        const challengeOBJ = challengeDict[challengeST]

        const bountyName = await BountyDictName(challengeOBJ)

        const bountyDescription = await BountyDictDesc(challengeOBJ)

        const bountyIcon = await BountyDictIcon(challengeOBJ)

        return (
            {
                name: bountyName,
                description: bountyDescription,
                icon: bountyIcon
            }
        )

    } catch (error) {
        console.error(`An error occurred while fetching the ${challengeDictURL} API:`, error.message)
    }
}