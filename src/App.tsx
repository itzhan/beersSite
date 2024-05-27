import { Box } from "@chakra-ui/react";
import "./App.css";
import BeerShop from "./components/shop/BeerShop";
import Timeline from "./components/timeline/Timeline";
import Home from "./components/Home";
import TerroirPage from "./components/terroir/TerroirPage";
import ProductHome from "./components/product/ProductHome";

function App() {
  return (
    <ProductHome></ProductHome>
    // <TerroirPage></TerroirPage>
    // <Box bg={'#f1f1f1'}>
    //   <Home></Home>
    //   <BeerShop></BeerShop>
    //   <Timeline></Timeline>
    //   <TerroirPage></TerroirPage>
    // </Box>
  );
}

export default App;
