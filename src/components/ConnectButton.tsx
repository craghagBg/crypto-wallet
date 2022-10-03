// ConnectButton.tsx
import React, { ReactElement } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useEthers, Mainnet, useEtherBalance, useTokenBalance } from '@usedapp/core'
import { utils } from 'ethers'

import Identicon from './Identicon'

const nexoAddress = '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206'

interface Props {
  handleOpenModal: () => void
}

export default function ConnectButton ({ handleOpenModal }: Props): ReactElement {
  const { activateBrowserWallet, account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)
  const tokenBalance = useTokenBalance(nexoAddress, account)
  const mainCurrency = chainId === Mainnet.chainId ? 'ETH' : 'BNB'

  return account
    ? (<Flex alignSelf='end' alignItems='center' background='gray.700' borderRadius='xl' position='fixed' top='0' py='0' m='10'>
      <Flex>
        {(tokenBalance != null) && <Text color='white' fontSize='md' ml='3'>
          {`${parseFloat(utils.formatEther(tokenBalance)).toFixed(2)} NEXO`}
        </Text>}
        {(etherBalance != null) && <Text color='white' fontSize='md' mx='3'>
          {`${parseFloat(utils.formatEther(etherBalance)).toFixed(3)} ${mainCurrency}`}
        </Text>}
      </Flex>
      <Button
        onClick={handleOpenModal}
        bg='gray.800'
        border='1px solid transparent'
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'blue.400',
          backgroundColor: 'gray.700'
        }}
        borderRadius='xl'
        m='1px'
        px={3}
        height='38px'
      >
        <Text color='white' fontSize='md' fontWeight='medium' mr='2'>
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Flex>)
    : (
      <Button display='flex' alignSelf='end' position='fixed' top='0' m='10' onClick={activateBrowserWallet}>
        Connect your wallet
      </Button>)
}
