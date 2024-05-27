import { Box } from "@chakra-ui/react";
import "./App.css";
import BeerShop from "./components/shop/BeerShop";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <Box bg={'#333333'} padding={'20'}>
      <Timeline />
    </Box>
  );
}

export default App;
