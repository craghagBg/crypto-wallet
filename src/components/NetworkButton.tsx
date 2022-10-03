import React, { ReactElement } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useEthers, Mainnet } from '@usedapp/core'

export default function Dashboard (): ReactElement {
  const { chainId } = useEthers()

  return (<Flex alignSelf='start' justifyContent='start' alignItems='start' background='gray.700' borderRadius='xl' position='fixed' top='0' p='2' m='10'>
    <Text color='white' fontSize='md'>
    {(chainId === Mainnet.chainId) && 'Chain: Ethereum Mainnet'}
    </Text>
</Flex>)
}
