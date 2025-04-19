export const BountyDictIcon = async (challengeOBJ) => {
    try {
        
        const bountyIconResponse = await fetch(`https://browse.wf/${challengeOBJ.icon}`)

        if (!bountyIconResponse.ok) {
            throw new Error(`HTTP error! Status: ${bountyIconResponse.status}`)
        }

        const bountyIconURL = await bountyIconResponse.url

        return bountyIconURL

    } catch (error) {
        console.error(`An error occurred while fetching the https://browse.wf/${challengeOBJ.icon} API:`, error.message)
    }
}

