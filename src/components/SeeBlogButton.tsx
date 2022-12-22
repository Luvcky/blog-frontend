import { Box, Flex, Link, LinkBox } from "@chakra-ui/react";
import React, { useState } from "react";
import { BlogPost } from "../assets/blogs";

const SeeBlogButton = ({ blogData }: { blogData: BlogPost }) => {
    const [isShowBlog , setIsShowBlog] = useState(false) 
    function showBlog() {
        setIsShowBlog((prev) => !prev)
    }
  if (blogData) {
    return (
      <Box shadow={'xl'} onClick={showBlog} borderRadius={10}>
        <Flex direction={"column"} justify={"center"} align={"center"} padding={30} gap={2} >
        <h1>
        {blogData.title}
        </h1>
        <h1>
        {blogData.authorName}
        </h1>
        {
            isShowBlog == true && <h1>
                {blogData.blog}
            </h1>
        }
        </Flex>
      </Box>
    );
  }
  return <></>
};

export default SeeBlogButton;
