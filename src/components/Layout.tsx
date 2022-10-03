// Layout.tsx
import React, { ReactElement, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children?: ReactNode
}

export default function Layout ({ children }: Props): ReactElement {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h='100vh'
      bg='gray.800'
    >
      {children}
    </Flex>
  )
}
