import React, { ReactElement, useCallback, useState } from 'react'
import { Flex, TableContainer, Heading, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { getTokens } from '../utils'

export default function Dashboard (): ReactElement {
  const { account } = useEthers()
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

  return account
    ? (<Flex px='3' color='white' overflowY='auto' flexDirection='column' h='360px' background='gray.800' borderRadius='xl' py='2'>
        <Heading size='lg' alignSelf='center'>Availble ERC-20 Tokens</Heading>
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
    : <Heading color='white' alignSelf='center'>Not available accounts</Heading>
}
