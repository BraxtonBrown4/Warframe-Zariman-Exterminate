export const BountyDictDesc = async (challengeOBJ) => {
    try {

        const bountyDescResponse = await fetch(`https://browse.wf/${challengeOBJ.description}`)

        if (!bountyDescResponse.ok) {
            throw new Error(`HTTP error! Status: ${bountyDescResponse.status}`)
        }

        const bountyDescOBJ = await bountyDescResponse.json()

        let bountyDesc = bountyDescOBJ.en

        bountyDesc = bountyDesc.replace("|COUNT|", challengeOBJ.requiredCount)

        return bountyDesc

    } catch (error) {
        console.error(`An error occurred while fetching the https://browse.wf/${challengeOBJ.description} API:`, error.message)
    }
}