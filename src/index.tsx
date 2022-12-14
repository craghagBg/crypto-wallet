import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { DAppProvider, Config, Mainnet, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const config: Config = {
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    56: ' https://bsc-dataseed.binance.org/',
    [Goerli.chainId]: getDefaultProvider('goerli')
  }
}

root.render(
  <StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </StrictMode>
)
