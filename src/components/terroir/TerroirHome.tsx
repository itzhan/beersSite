import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import homeBg from "../../img/mediaHomeBg.png";
import useScroll from "../../Hooks/useScroll";
import AnimatedIcon from "../AnimatedIcon";
import bg1 from "../../img/mediaBg.png";

const TerroirHome = () => {
  const scrollY = useScroll();
  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      spacing={"100px"}
      alignItems={"center"}
      pt={"120"}
      bgImage={`url(${bg1})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center>
        <Center w={"688px"} h={"427px"} bgImg={`url(${homeBg})`} pb={"10"}>
          <Box style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <Stack spacing={"5"} align={"center"}>
              <Text
                color={"#99825b"}
                fontSize={"2xl"}
                textTransform={"uppercase"}
              >
                chateau marjaux
              </Text>
              <Text color={"black"} fontSize={"2xl"}>
                卓越风土孕育上乘佳酿
              </Text>
              <Heading
                as={"h1"}
                fontWeight={"450"}
                fontSize={"150px"}
                color={"#bbab7c"}
              >
                风土
              </Heading>
            </Stack>
          </Box>
        </Center>
      </Center>
      <AnimatedIcon />
    </Stack>
  );
};

export default TerroirHome;
