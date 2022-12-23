import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import { addBlog, BlogPost, blogs } from "../assets/blogs";

const WriteB = () => {
  const [blogData, setBlogData] = useState<BlogPost>({
    title: "",
    postDate: new Date(),
    authorName: "",
    blog: "",
  });

  function onChangeInput(event: any) {
    setBlogData({ ...blogData, [event.target.name]: event.target.value });
  }

  const toast = useToast();

  function onPost(event: any) {
    event.preventDefault()
    toast({ title: "Posted", status: "success" });
    addBlog(blogData);
  }
  return (
    <Box px="100px">
      <Heading textAlign={"center"}>Write Blog</Heading>
      <form onSubmit={(event) => {return onPost(event)}}>
        {NewInput("Title", "title", blogData.title)}
        {NewInput("Author Name", "authorName", blogData.authorName)}
        {NewInput("Blog", "blog", blogData.blog, true)}
        <Flex align={"center"} justify={"center"} gap={3}>
          <Button type={'submit'} colorScheme={"green"}>
            Post
          </Button>
        </Flex>
      </form>
    </Box>
  );
  function NewInput(
    heading: string,
    name: string,
    value: any,
    isTextArea?: boolean
  ) {
    return (
      <Flex
        margin={10}
        padding={2}
        gap={5}
        justify={"space-between"}
        shadow={"xl"}
        borderRadius={5}
        align={"center"}
        fontSize={"2xl"}
      >
        <Text fontSize={"l"}>{heading + ":"}</Text>
        {isTextArea ? (
          <Textarea
          isRequired
            name={name}
            value={value}
            onChange={onChangeInput}
            maxW={"1300px"}
          ></Textarea>
        ) : (
          <Input
            isRequired
            type={"text"}
            name={name}
            value={value}
            onChange={onChangeInput}
            maxW={"1300px"}
          />
        )}
      </Flex>
    );
  }
};

export default WriteB;