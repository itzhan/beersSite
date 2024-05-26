import "./App.css";
import Home from "./components/Home";
import { Box, Text } from "@chakra-ui/react";
import TerroirHome from "./components/terroir/TerroirHome";
import bg1 from "./img/mediaBg.png";
import MediaL from "./components/terroir/MediaL";
import MediaR from "./components/terroir/MediaR";

function App() {
  return (
    <>
      <Box bg={"#f1f1f1"} bgImage={`url(${bg1})`} bgSize={"cover"}>
        <TerroirHome />
        <MediaL />
        <MediaR />
      </Box>
    </>
  );
}

export default App;
