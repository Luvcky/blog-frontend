import { Flex, Heading } from '@chakra-ui/react'
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
        <Heading textAlign={'center'}>
            Avaliable Blogs
        </Heading>
        <Flex direction={'row'} wrap={'wrap'} p="20" gap={'100px'} justify={'center'}>
            {generateBlogs()}
        </Flex>
    </div>
  )
}

export default SeeB