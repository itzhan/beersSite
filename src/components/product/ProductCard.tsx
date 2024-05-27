import { Box, Img, Stack, Text } from "@chakra-ui/react";
import bottleBg from "../../img/bottleBg.jpg";
import bottle1 from "../../img/bottle1.png";

interface Props {
    photo: string;
    title: string;
}

const ProductCard = ({ photo, title }: Props) => {
  return (
    <Box
      w="100%"
      h="100%"
      overflow="hidden"
      bgImg={bottleBg}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      transition="all 0.3s ease-in-out"
      _hover={{ cursor: "pointer", filter: "brightness(0.88)" }}
    >
      <Box
        margin="auto"
        w="245px"
        h="500px"
        overflow="hidden"
        p="4"
        pt="100px"
      >
        <Stack letterSpacing="0.2em" textAlign="center">
          <Text fontSize="13px">另见</Text>
          <Stack spacing="2" color="#cab57e" mt="1">
            <Text fontSize="20px" mt="2">
              {title || "铁棍山药"}
            </Text>
            <Text fontSize="11px">天府酒庄</Text>
          </Stack>
          <Img src={photo || bottle1} transform="scale(0.65)" />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
