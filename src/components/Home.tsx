import {
  Center,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import video from "../video/home2.mp4";
import { useEffect, useRef, useState } from "react";
import Border from "./Border";
import { Link as ReachLink } from "react-router-dom";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isFirst, setFirstPlay] = useState(true);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [bottomVisble, setBottomVisble] = useState(false);

  useEffect(() => {
    if (isFirst) {
      const timer = setTimeout(() => {
        if (videoRef.current) videoRef.current.play();
        setFirstPlay(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      videoRef.current?.play();
    }
  }, [isFirst]);

  useEffect(() => {
    // Delay showing buttons by 2 seconds
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBottomVisble(true);
    }, 600);

    return () => clearTimeout(timer);
  });

  return (
    <Border>
      <Box position="relative" minH="100vh">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={false}
          loop
          muted
          playsInline
          pointer-events="none"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0, // 确保视频在内容之后
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <Center position="relative" minH="100vh">
          <VStack textAlign="center" color="white" spacing={"50px"} maxW="md">
            <Box>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                color="#cab57e"
                className={"fade-in-top"}
              >
                铁棍山药酒
              </Heading>
              <Text mt={"5"} fontSize={"18px"} className={"fade-in-top2"}>
                精选上等山药及多种珍贵中药材，通过独特的发酵工艺和现代化的酿造技术，历经数十道工序精心酿制而成
              </Text>
            </Box>
            <HStack spacing={"20"} className={"fade-in-bottom"}>
              {buttonsVisible ? (
                <>
                  <Link as={ReachLink} to={"/terroir"}>
                    <Button color={"#cab57e"} bg={'rgba(255, 255, 255, 0.1)'} _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}>风土</Button>
                  </Link>
                  <Link as={ReachLink} to={"/product"}>
                    {" "}
                    <Button color={"#cab57e"} size={"lg"} bg={'rgba(255, 255, 255, 0.1)'} _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}>
                      产品
                    </Button>
                  </Link>
                    <Button color={"#cab57e"} bg={'rgba(255, 255, 255, 0.1)'} _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}>历史</Button>
                </>
              ) : (
                <>
                  <Button bg={"transparent"}></Button>
                  <Button bg={"transparent"} size={"lg"}></Button>
                  <Button bg={"transparent"}></Button>
                </>
              )}
            </HStack>
          </VStack>
        </Center>
        <Box position="absolute" bottom={"50px"} left={0} width="100%">
          <HStack
            justifyContent="center"
            fontSize={"14px"}
            spacing={"30px"}
            className="fade-in"
          >
            {bottomVisble && (
              <>
                <Link color={'white'}>联系与参观</Link>
                <Link color={'white'}>新闻中心</Link>
                <Link color={'white'}>真伪查询</Link>
              </>
            )}
          </HStack>
        </Box>
      </Box>
    </Border>
  );
};

export default Home;

/**
 *
 */
