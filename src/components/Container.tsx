// ConnectButton.tsx
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useEthers, Mainnet } from '@usedapp/core'
// import { useTokenBalance, useToken } from '@usedapp/core'
// import { utils, constants } from 'ethers'
// import tokenList from '../tokenList.json'
import { Theme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

export default function Container (): JSX.Element {
  const { account, chainId } = useEthers()
  const isMainnet = chainId === Mainnet.chainId
  // const availebleTokens: Array<{ symbol: string | undefined, name: string | undefined, decimals: | number | undefined, totalSupply: string }> = []

  // Object.keys(tokenList).forEach(token => {
  //   const balance = useTokenBalance(token, account)
  //   const { name, symbol, decimals, totalSupply } = useToken(token) ?? {}

  //   if (balance && balance > constants.Zero) {
  //     availebleTokens.push({
  //       name,
  //       symbol,
  //       decimals,
  //       totalSupply: totalSupply ? utils.formatUnits(totalSupply, decimals) : ''
  //     })
  //   }
  // })

  const theme: Theme = {
    primary: '#000',
    secondary: '#666',
    interactive: '#AFAFAF',
    container: '#DADADA',
    module: '#FFF',
    accent: '#FF7BC2',
    outline: '#000',
    dialog: '#FFF',
    fontFamily: 'Comic Sans MS',
    borderRadius: 1
  }

  return isMainnet
    ? account
      ? (<Box px='3' background='gray.700' borderRadius='xl' py='2'>
          <Text color='white' fontSize='md'>
          {(chainId === Mainnet.chainId) && 'Current chain is Ethereum Mainnet'}
          </Text>
          <SwapWidget theme={theme} width={560} />

            {/* {availebleTokens.map(token => (<Text key={token.symbol}>{`${token?.symbol ?? ''} ${token?.name ?? ''} ${token?.decimals ?? ''} ${token?.totalSupply}`}</Text>))} */}

      </Box>)
      : <Box>Not available accounts</Box>
    : (<Text color='white' fontSize='md'>Selected network is not Ethereum Mainnet! Please switch the network!</Text>)
}
