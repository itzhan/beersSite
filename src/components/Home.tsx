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
        <Center
          position="relative"
          zIndex={10}
          minH="100vh"
        >
          <VStack textAlign="center" color="white" spacing={5} maxW="md">
            <Heading as="h1" size="2xl" fontWeight="bold" color="#cab57e">
              铁根山药酒
            </Heading>
            <Text>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </Text>
            <Button color={"#cab57e"}>Get Start</Button>
          </VStack>
        </Center>
      </Box>
  );
};

export default Home;
