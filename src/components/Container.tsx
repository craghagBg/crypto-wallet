// ConnectButton.tsx
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useEthers, Mainnet } from '@usedapp/core'

export default function Container (): JSX.Element {
  const { account, chainId } = useEthers()
  const isMainnet = chainId === Mainnet.chainId

  return isMainnet
    ? account
      ? (<Box px='3' background='gray.700' borderRadius='xl' py='2'>
        <Text color='white' fontSize='md'>
        {(chainId === Mainnet.chainId) && 'Current chain is Ethereum Mainnet'}
        </Text>
    </Box>)
      : <Box>Not available accounts</Box>
    : (<Text color='white' fontSize='md'>Selected network is not Ethereum Mainnet! Please switch the network!</Text>)
}
