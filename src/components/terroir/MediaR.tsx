import { Box, SimpleGrid, Stack, Text, Image, Button, Collapse } from "@chakra-ui/react";
import bg1 from "../../img/mediaBg.png";
import useExpand from "../../Hooks/useExpand";
import useScroll from "../../Hooks/useScroll";

const MediaR = () => {
  const scrollY = useScroll();
  const { isExpand, handleTaggle } = useExpand();

  return (
    <>
      <Box
        bgImage={`url(${bg1})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100vw"
        h="auto"
        minH="75vh"
        position="relative"
      >
        <SimpleGrid templateColumns="1fr 1fr" w="100vw" minH="75vh">
          <Box position="relative" overflow="hidden">
            <Box mx="auto" zIndex="2" position="relative" ml={'100'}>
              <Image
                objectFit="cover"
                src="https://s3-eu-west-3.amazonaws.com/cm-site/wp-content/uploads/2018/03/10162710/les-conditions-naturelles-600x450.jpg"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
            </Box>
          </Box>
          <Box position="relative" >
            <Stack spacing={10} ml={'20'} pb={'10'} position={'relative'} top="0" right="0" bottom="0" bg="black" w="70%" zIndex="1">
              <Text color="#cab57e" fontSize="20px" mt={'100px'}>
              自然条件
              </Text>
              <Text fontSize="20px" lineHeight="30px" color="white">
              在构成优质葡萄酒风土的种种因素中，首屈一指的是自然条件——土壤和气候。正是气候给葡萄提供了理想的生长条件，完美的气候让葡萄达到完美和谐的成熟度。
              </Text>
              <Collapse in={isExpand}>
                <Text mb="8" fontSize="20px" lineHeight="30px" color="white">
                  具有地理优势的葡萄园，葡萄的成熟期自然是非常漫长且不稳定。土壤因素极为重要，以至于极微小的变化，即可使葡萄酒的质量和特性出现极大的差异，即使是两片相邻的地块。
在很大程度上，人们对这种相互作用的机制知之甚少，但它们的存在是再明确不过的了。
                </Text>
              </Collapse>
              {!isExpand && (
                <Button
                  w="225px"
                  h="70px"
                  mb="8"
                  fontSize="16px"
                  color="#000000"
                  bg="#cab57e"
                  _hover={{ bg: "#dbc893" }}
                  onClick={handleTaggle}
                >
                  了解更多
                </Button>
              )}
            </Stack>
          </Box>
        </SimpleGrid>
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          bg="black"
          w="70%"
          zIndex="0"
        />
      </Box>
    </>
  );
};

export default MediaR;
