import React, { ReactElement, useCallback, useState } from 'react'
import { Flex, Text, List, ListItem } from '@chakra-ui/react'
import { useEthers, Mainnet } from '@usedapp/core'
import { getTokens } from '../utils'

export default function Dashboard (): ReactElement {
  const { account, chainId } = useEthers()
  const isMainnet = chainId === Mainnet.chainId
  const [tokens, setTokens] = useState<Array<{ name: string, symbol: string, address: string, balance: string }>>([])

  if (account) {
    getTokens(account)
      .then(setTokens)
      .catch(console.log)
  }

  const showTokenList = useCallback((): ReactElement | ReactElement[] => {
    return tokens.map(token => (
      <List key={token.address}>
        <ListItem>
          {`${token.name} ${token.balance} ${token.symbol}`}
        </ListItem>
      </List>
    ))
  }, [tokens])

  return isMainnet
    ? account
      ? (<Flex px='3' color='white' overflowY='auto' justifyContent='center' flexDirection='column' h='360px' background='gray.800' borderRadius='xl' py='2'>
        <Text color='white' fontSize='md' mb='5'>
          {(chainId === Mainnet.chainId) && 'Chain: Ethereum Mainnet'}
        </Text>
        {showTokenList()}
      </Flex>)
      : <Text>Not available accounts</Text>
    : (<Text color='white' fontSize='md'>Selected network is not Ethereum Mainnet! Please switch the network!</Text>)
}
