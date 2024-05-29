import { Button, Center, Text, Heading, Box, VStack } from "@chakra-ui/react";
import video from "../video/home.mp4";

const Home = () => {
  return (
    <Box position="relative" minH="100vh" bg="gray.800">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <Center position="relative" zIndex={10} minH="100vh">
        <VStack textAlign="center" color="white" spacing={20} maxW="md">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" color="#cab57e">
              铁根山药酒
            </Heading>
            <Text mt={'5'}>
              精选上等山药及多种珍贵中药材，通过独特的发酵工艺和现代化的酿造技术，历经数十道工序精心酿制而成
            </Text>
          </Box>
          <Button color={"#cab57e"} >了解产品</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;
