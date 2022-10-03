import React, { ReactElement } from 'react'
import { Theme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const theme: Theme = {
  primary: '#000',
  secondary: '#666',
  interactive: '#AFAFAF',
  container: '#DADADA',
  module: '#FFF',
  accent: '#FF7BC2',
  outline: '#000',
  dialog: '#FFF',
  fontFamily: 'Comic Sans MS',
  borderRadius: 1
}

export default function UnisweapWidget (): ReactElement {
  return (
    <SwapWidget theme={theme} width={536} />
  )
}
