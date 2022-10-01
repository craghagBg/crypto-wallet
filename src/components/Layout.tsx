// Layout.tsx
import React, { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children?: ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.800"
    >
      {children}
    </Flex>
  )
}
