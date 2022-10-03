import React, { ReactElement } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useEthers, useConfig } from '@usedapp/core'

export default function Dashboard (): ReactElement {
  const { chainId } = useEthers()
  const { networks } = useConfig()

  const chain = chainId ? networks?.find(network => network.chainId === chainId) : null

  return chain
    ? (<Flex alignSelf='start' justifyContent='start' alignItems='start' background='gray.700' borderRadius='xl' position='fixed' top='0' px='3' py='2' m='10'>
    <Text color='white' fontSize='md'>{`Chain: ${chain.chainName}`}</Text>
  </Flex>)
    : (<Text></Text>)
}
