export const GenerateEmbed = (bountyInfo) => {

    const {description, name, icon, expiry, VQAmount} = bountyInfo

    const expiryInSeconds = Math.floor(expiry / 1000)
    const VQAmountSP = Math.ceil(VQAmount * 1.5)

        return {
            title: "Zariman Exterminate:",
            description: `${description}`,
            color: 16711680,
            thumbnail: {
                url: `${icon}`
            },
            fields: [
                {
                    name: "Steel Path Rewards",
                    value: `${VQAmountSP} Void Quills`,
                    inline: false
                },
                {
                    name: "Expiring at",
                    value: `<t:${expiryInSeconds}:t> (<t:${expiryInSeconds}:R>)`,
                    inline: false
                }
            ]
        }
    }