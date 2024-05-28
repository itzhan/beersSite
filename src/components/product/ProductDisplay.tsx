import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import bottle1 from "../../img/bottle1.png";
import bottle2 from "../../img/bottle2.png";
import bottle3 from "../../img/bottle4.png";
import bottle4 from "../../img/bottle3.png";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  return (
    <Box mt={'10'}>
        <Heading
          as={'h3'}
          fontWeight={"normal"}
          fontSize={"35px"}
          color={"#c2a980"}
          textAlign={"center"}
          letterSpacing={"0.1em"}
          data-aos="fade-up"
          mb={'10'}
        >
          查看更多产品
        </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
        <ProductCard photo={bottle1} title="御品山珍酒" />
        <ProductCard photo={bottle2} title="长寿山药酿" />
        <ProductCard photo={bottle3} title="玉露山药酒" />
        <ProductCard photo={bottle4} title="金桂山药酿" />
      </SimpleGrid>
    </Box>
  );
};
//古韵山药酒

export default ProductDisplay;
