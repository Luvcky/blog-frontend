import { Flex } from '@chakra-ui/react'
import React from 'react'
import { blogs } from '../assets/blogs'
import SeeBlogButton from './SeeBlogButton'

const SeeB = () => {

    function generateBlogs() {
        let blogShow = []
        for (let i = 0; i < blogs.length; i++){
            blogShow.push(<SeeBlogButton  blogData={blogs[i]}/>)
        }
        return blogShow
    }
  return (
    <div>
        <Flex direction={'row'} wrap={'wrap'} p="10" gap={3}>
            {generateBlogs()}
        </Flex>
    </div>
  )
}

export default SeeB