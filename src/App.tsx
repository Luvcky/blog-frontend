import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages";
import theme from "./theme";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Blog from "./pages/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
