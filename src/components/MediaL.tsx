import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react";

const MediaL = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SimpleGrid templateColumns="2fr 1fr" spacing={10}>
        <Box pl="100">
          <Stack spacing={10}>
            <Heading
              as="h1"
              fontSize="150px"
              lineHeight="100px"
              mt="170px"
              fontFamily="'Cormorant Garamond', serif"
              color="#cab57e"
            >
              起源
            </Heading>
            <Text color="#cab57e" fontSize="2xl" mt="10">
              酒店正式评级
            </Text>
            <Text fontSize="20px" lineHeight="30px">
              玛歌酒庄漫长而富有激情的历史绝非三言两语所能概括，或许可以这样说起：“那是在很久很久以前，玛歌酒庄…”
            </Text>
          </Stack>
        </Box>
        <Box position="relative" overflow="hidden">
          <Image
            objectFit="cover"
            src="https://s3-eu-west-3.amazonaws.com/cm-site/wp-content/uploads/2018/03/10162708/01-XVI-600x381.jpg"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </Box>
      </SimpleGrid>
      <Text mt={'10000'}>1</Text>
    </>
  );
};

export default MediaL;
