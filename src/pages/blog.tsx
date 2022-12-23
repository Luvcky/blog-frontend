import React from 'react'
import { useLocation } from 'react-router'
import { BlogPost } from '../assets/blogs'
import BlogDisplay from '../components/BlogDisplay'

const Blog = () => {
    const loaction = useLocation()
    let blogData = loaction.state as BlogPost
  return (
    <BlogDisplay blogData = {blogData}/>
  )
}

export default Blog