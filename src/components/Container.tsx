// ConnectButton.tsx
import React, { ReactElement } from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { UnisweapWidget, Dashboard } from './'

export default function Container (): ReactElement {
  return (
    <Box background='gray.700' w='568px' h='456px' borderRadius='xl' py='2'>
      <Tabs variant='soft-rounded' isFitted >
        <TabList mx='5' mt='2'>
          <Tab color='white'>Swap</Tab>
          <Tab color='white'>Dashboard</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UnisweapWidget />
          </TabPanel>
          <TabPanel>
            <Dashboard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
