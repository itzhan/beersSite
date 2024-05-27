import "./App.css";
import BorderAnimation from "./components/Border";
import Home from "./components/Home";
import BeerCard from "./components/shop/BeerCard";
import TerroirPage from "./components/terroir/TerroirPage";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <Center h={"100vh"} w={"100vw"} bg={'#f1f1f1'}>
        <BeerCard></BeerCard>
    </Center>
  );
}

export default App;
