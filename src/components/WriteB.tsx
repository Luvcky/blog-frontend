import { Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import  {addBlog, BlogPost, blogs}  from '../assets/blogs'

const WriteB = () => {
    const [blogData, setBlogData] = useState<BlogPost>({
        title: '',
        postDate: new Date(),
        authorName: '',
        blog: '',
        timeToRead: 0
    })

    function onChangeInput(event: any) {
        setBlogData({...blogData, [event.target.name]: event.target.value})
    }

    function onPost(){
       addBlog(blogData)
    }
  return (
    <div>
        <Heading textAlign={'center'}>
            Write Blog
        </Heading>
        {NewInput('Title', 'title', blogData.title)}
        {NewInput('Author Name', 'authorName', blogData.authorName)}
        {NewInput('Blog', 'blog', blogData.blog, true)}
        {NewInput('Time to Read', 'timeToRead', blogData.timeToRead)}
        <Flex align={'center'} justify={'center'}>
            <Button onClick={onPost} colorScheme={'green'}>
                Post
            </Button>
        </Flex>

    </div>
  )
    function NewInput(heading:string ,  name: string, value: any, isTextArea?:boolean) {
        return <Flex margin={10} padding={2} gap={2} shadow={'xl'} borderRadius={5}>
            <Text fontSize={'l'}>
                {heading + ":"}
            </Text>
            {
                isTextArea ? <Textarea name={name} value={value} onChange={onChangeInput}></Textarea> :  <Input type={'text'} name={name} value={value} onChange={onChangeInput} />
            }
           
        </Flex>
        
    }
}

export default WriteB