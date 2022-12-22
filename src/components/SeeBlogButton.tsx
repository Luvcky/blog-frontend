import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BlogPost } from "../assets/blogs";

const SeeBlogButton = ({ blogData }: { blogData: BlogPost }) => {
    const [isShowBlog , setIsShowBlog] = useState(false) 
    function showBlog() {
        setIsShowBlog((prev) => !prev)
    }
  if (blogData) {
    return (
      <Box boxShadow={'-2px 1px 70px 10px rgba(210,0,255,0.5)'} onClick={showBlog} borderRadius={10} overflow={'scroll'}>
        <Flex direction={"column"} justify={"center"} align={"center"} padding={50} gap={3} >
        <Text fontSize={'20px'} fontWeight={'bold'} >
        {blogData.title}
        </Text>
        <h1>
        {blogData.authorName}
        </h1>
        <h1>
        {blogData.timeToRead + " minute Read"}
        </h1>
        {
            isShowBlog == true && <Text whiteSpace={'pre-line'}>
                {blogData.blog}
            </Text>
        }
        </Flex>
      </Box>
    );
  }
  return <></>
};

export default SeeBlogButton;
