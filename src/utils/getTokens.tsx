import { Network, Alchemy } from 'alchemy-sdk'
import { utils } from 'ethers'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTokens = async (account: string | undefined): Promise<Array<{ name: string, symbol: string, address: string, balance: string }>> => {
  if (account) {
    const settings = {
      apiKey: '5Xj7Eqe2ANVGOfoRZmH_m8t1YqaEfOv4',
      network: Network.ETH_MAINNET
    }

    const alchemy = new Alchemy(settings)

    const result = await alchemy.core.getTokenBalances(account ?? '')
    const reshapedTokens: Array<{ name: string, symbol: string, address: string, balance: string }> = []

    for (const token of Object.values(result?.tokenBalances)) {
      const tokenInfo = await alchemy.core.getTokenMetadata(token.contractAddress)

      if (Number(token.tokenBalance) > 0) {
        reshapedTokens.push({
          name: tokenInfo?.name ?? '',
          symbol: tokenInfo?.symbol ?? '',
          address: token.contractAddress,
          balance: parseFloat(utils.formatEther(token.tokenBalance ?? 0)).toFixed(tokenInfo?.decimals ?? 0)
        })
      }
    }

    return reshapedTokens
  }

  return await new Promise((resolve) => resolve([]))
}
