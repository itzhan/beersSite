import MediaL from "./MediaL";
import MediaR from "./MediaR";
import TerroirHome from "./TerroirHome";
import bg1 from "../../img/mediaBg.png";
import { Box, Text } from "@chakra-ui/react";

const TerroirPage = () => {
  return (
    <Box bg={"#f1f1f1"} bgImage={`url(${bg1})`} bgSize={"cover"} w={"1140px"}>
      <TerroirHome />
      <MediaL />
      <MediaR />
      <Text mt={'1000'}>1</Text>
    </Box>
  );
};

export default TerroirPage;
