import React, { useState } from "react";
import ProductHome from "./ProductHome";
import ProductDetail from "./ProductDetail";
import ProductDisplay from "./ProductDisplay";
import Timeline from "../timeline/Timeline";
import { Box } from "@chakra-ui/react";
import { LordIcon } from "../../lord-icon";

const Productpage = () => {
  const [blobUrl, setBlobUrl] = useState<string>('');
  
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
