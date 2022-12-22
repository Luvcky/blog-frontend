import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import SeeB from '../components/SeeB'
import WriteB from '../components/WriteB'

const MainPage = () => {
  const [writeShow, setWriteShow] = useState(false)
  const [seeShow, setSeeShow] = useState(true)

  function writeClick() {
    setWriteShow(true)
    setSeeShow(false)
  }
  function seeClick() {
    setWriteShow(false)
    setSeeShow(true)
  }

  return (
   <div>
    <Flex margin={100} align={'center'} justify={'center'} gap={5}>
      <Button onClick={writeClick} colorScheme={'purple'}>
          Write Blog
      </Button>
      <Button onClick={seeClick} variant={'outline'} colorScheme={'purple'}>
          See Blog
      </Button>
    </Flex>
    {
      seeShow == true && <SeeB />
    }
    {
      writeShow == true && <WriteB />
    }
   </div>
  )
}

export default MainPage