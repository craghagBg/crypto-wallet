import React, { ReactElement } from 'react'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { Layout, ConnectButton, Container, AccountModal, NetworkButton, ErrorMessage } from './components'

export default function App (): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <Layout>
        <NetworkButton />
        <ConnectButton handleOpenModal={onOpen}/>
        <ErrorMessage />
        <Container />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  )
}
