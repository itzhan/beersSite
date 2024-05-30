import ProductHome from "./ProductHome";
import ProductDetail from "./ProductDetail";
import ProductDisplay from "./ProductDisplay";
import Timeline from "../timeline/Timeline";
import { Box } from "@chakra-ui/react";

const Productpage = () => {
  return (
    <div>
      <ProductHome />
      <Box bg={"#181415"}>
        <ProductDetail />
        <Timeline />
        <ProductDisplay />
      </Box>
    </div>
  );
};

export default Productpage;
