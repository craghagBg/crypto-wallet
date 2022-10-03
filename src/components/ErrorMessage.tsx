import React, { ReactElement } from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { useEthers, Mainnet } from '@usedapp/core'

export default function ErrorMessage (): ReactElement {
  const { chainId } = useEthers()

  return chainId !== Mainnet.chainId
    ? <Heading size='lg' alignSelf='center' color='red' m='10'>Selected network is not Ethereum Mainnet! Please switch the network!</Heading>
    : (<Text></Text>)
}
