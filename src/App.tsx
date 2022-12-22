import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages'

function App() {

  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  )
}

export default App
