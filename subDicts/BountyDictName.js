export const BountyDictName = async (challengeOBJ) => {
    try {

        const bountyNameResponse = await fetch(`https://browse.wf/${challengeOBJ.name}`)

        if (!bountyNameResponse.ok) {
            throw new Error(`HTTP error! Status: ${bountyNameResponse.status}`)
        }

        const bountyNameOBJ = await bountyNameResponse.json()

        const bountyName = bountyNameOBJ.en

        return bountyName

    } catch (error) {
        console.error(`An error occurred while fetching the https://browse.wf/${challengeOBJ.name} API:`, error.message)
    }
}