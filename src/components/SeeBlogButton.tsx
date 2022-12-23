import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BlogPost } from "../assets/blogs";

const SeeBlogButton = ({ blogData }: { blogData: BlogPost }) => {
  const navigate = useNavigate()
  if (blogData) {
    return (
      <Box
        boxShadow={"-2px 1px 70px 10px rgba(210,0,255,0.5)"}
        borderRadius={10}
        overflow={"scroll"}
        onClick= {() => navigate('/blog', {state: blogData})}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          padding={50}
          gap={3}
        >
          <Text fontSize={"20px"} fontWeight={"bold"}>
            {blogData.title}
          </Text>
          <Text>{blogData.authorName}</Text>
        </Flex>
      </Box>
    );
  }
  return <></>;
};

export default SeeBlogButton;
