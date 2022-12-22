import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ChakraProvider,} from '@chakra-ui/react'
import MainPage from './pages'
import theme from "./theme";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  )
}

export default App
