import { SimpleGrid } from "@chakra-ui/react";
import bottle1 from "../../img/bottle1.png";
import bottle2 from "../../img/bottle1.png";
import bottle3 from "../../img/bottle1.png";
import bottle4 from "../../img/bottle1.png";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
      <ProductCard photo={bottle1} title="御品山珍酒" />
      <ProductCard photo={bottle2} title="长寿山药酿" />
      <ProductCard photo={bottle3} title="玉露山药酒" />
      <ProductCard photo={bottle4} title="金桂山药酿" />
    </SimpleGrid>
  );
};
//古韵山药酒

export default ProductDisplay;
