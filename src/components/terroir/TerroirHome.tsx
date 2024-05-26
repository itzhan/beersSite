import { Box, Center, Heading, keyframes, Stack, Text } from "@chakra-ui/react";
import homeBg from "../../img/mediaHomeBg.png";
import useScroll from "../../Hooks/useScroll";
import AnimatedIcon from "../AnimatedIcon";
import bg1 from "../../img/mediaBg.png";
import { motion } from "framer-motion";

const fadeInBottom = keyframes`
0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0);opacity:1}
`;

const fadeInTop = keyframes`
0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}`;

const fadeInT = `${fadeInTop} 1s ease-in-out`;
const fadeInB = `${fadeInBottom} 1s ease-in-out`;

const MotionBox = motion(Box);

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
                animation={fadeInT}
              >
                chateau marjaux
              </Text>
              <Text color={"black"} fontSize={"2xl"} animation={fadeInB}>
                卓越风土孕育上乘佳酿
              </Text>
              <MotionBox
                initial={{ transform: "translate3d(0px, calc(50% + 0.4px), 0px)", opacity: 0 }}
                animate={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Heading
                  as={"h1"}
                  fontWeight={"450"}
                  fontSize={"150px"}
                  color={"#bbab7c"}
                >
                  风土
                </Heading>
              </MotionBox>
            </Stack>
          </Box>
        </Center>
      </Center>
      <AnimatedIcon />
    </Stack>
  );
};

export default TerroirHome;
