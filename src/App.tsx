import "./App.css";
import MediaL from "./components/MediaL";
import Home from "./components/Home";
import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Home></Home>
      <Box bg={"#f1f1f1"}>
        <MediaL></MediaL>
      </Box>
      <Text mt={'1000'}>1</Text>
    </>
  );
}

export default App;
