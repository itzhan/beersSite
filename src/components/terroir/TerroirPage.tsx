import MediaL from "./MediaL";
import MediaR from "./MediaR";
import TerroirHome from "./TerroirHome";
import io from '../../icon/io.json'
import { Box, Text } from "@chakra-ui/react";
import { LordIcon } from "../../lord-icon";

const TerroirPage = () => {
  const blob = new Blob([JSON.stringify(io)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  return (
    <Box bg={"#f1f1f1"} position={"relative"}>
      <Box
        position={"fixed"}
        right={3}
        top={3}
        zIndex={"10"}
        _hover={{ cursor: "pointer" }}
      >
        <LordIcon src={url} trigger="click" size={55}/>
      </Box>
      <TerroirHome />
      <MediaL />
      <MediaR />
      <Text mt={"1000"}>1</Text>
    </Box>
  );
};

export default TerroirPage;
