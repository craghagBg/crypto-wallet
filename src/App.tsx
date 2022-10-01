import React from 'react'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { Layout, ConnectButton, Container, AccountModal } from './components'

export default function App (): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen}/>
        <Container />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  )
}
