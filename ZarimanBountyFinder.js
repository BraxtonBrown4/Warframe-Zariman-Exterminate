import { BountyDictFinder } from "./BountyDictFinder.js"

const challengeChecker = (challenge) => {
    const badChallenges = ['/ZarimanExterminateNoPowersChallenge', '/ZarimanKillAsOperator', '/ZarimanDefeatVoidAngelChallenge']

    return !badChallenges.some(BC => challenge.includes(BC));
}

export const ZarimanBountyFinder = async () => {
    const allBountyURL = 'https://oracle.browse.wf/bounty-cycle'
    
    try {
        const allBountyResponse = await fetch(allBountyURL)

        if (!allBountyResponse.ok) {
            throw new Error(`HTTP error! Status: ${allBountyResponse.status}`)
        }

        const allBounties = await allBountyResponse.json()

        const extermBounty = allBounties.bounties.ZarimanSyndicate.find(b => b.node === 'SolNode231') //<-- Extermination Node

        if (extermBounty === undefined) {
            throw new Error(`No Exterminate Mission Found`)
        }
        
        const VQAmount = allBounties.bounties.ZarimanSyndicate.indexOf(extermBounty) + 1

        const bountyExpiry = allBounties.expiry

        const challengeST = extermBounty.challenge

        if (VQAmount > 3 && challengeChecker(challengeST)) {
            const ParticialBountyInfo = await BountyDictFinder(challengeST)

            return (
                {
                    ...ParticialBountyInfo,
                    VQAmount: VQAmount,
                    expiry: bountyExpiry,
                }
            )
        } else {
            console.log('Bad Challenge Or Insufficient Void Quills')

            return  null
        }

    } catch (error) {
        console.error(`An error occurred while fetching the ${allBountyURL} API:`, error.message)
    }
}