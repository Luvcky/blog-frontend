import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { BlogPost } from '../assets/blogs'

const BlogDisplay = ({blogData} : {blogData: BlogPost}) => {
  return (
    <>
    <VStack>
        <Heading textAlign={'center'} margin={0} padding={10}>
            {blogData.title}
        </Heading>
        <Heading>
            Written by: {blogData.authorName} 
        </Heading>
    </VStack>
      <Box whiteSpace={'pre'} margin={20} boxShadow={"-2px 1px 70px 10px rgba(210,0,255,0.5)"} borderRadius={5} padding={7} overflow={'auto'}>
              <ReactMarkdown>{blogData.blog}</ReactMarkdown>
          </Box>
    </>
  )
}

export default BlogDisplay

