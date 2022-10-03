import React, { ReactElement, useCallback, useState } from 'react'
import { Flex, Text, TableContainer, Heading, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'
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
    return (tokens.map(token => (
        <Tr key={token.address} overflowX='hidden' textOverflow='ellipsis'>
          <Td maxWidth='120px' overflowX='hidden' textOverflow='ellipsis'>{token.name}</Td>
          <Td isNumeric maxWidth='180px' overflowX='hidden' textOverflow='ellipsis'>{token.balance}</Td>
          <Td>{token.symbol}</Td>
        </Tr>
    )))
  }, [tokens])

  return isMainnet
    ? account
      ? (<Flex px='3' color='white' overflowY='auto' flexDirection='column' h='360px' background='gray.800' borderRadius='xl' py='2'>
          <Heading alignSelf='center'>Availble Tokens</Heading>
          <TableContainer overflowY='auto' h='360px'>
            <Table overflowY='auto'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Balance</Th>
                  <Th>symbol</Th>
                </Tr>
              </Thead>
              <Tbody>
                {showTokenList()}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>)
      : <Text>Not available accounts</Text>
    : (<Text color='white' fontSize='md'>Selected network is not Ethereum Mainnet! Please switch the network!</Text>)
}
