import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  Collapse,
} from "@chakra-ui/react";
import bg1 from "../../img/mediaBg.png";
import useExpand from "../../Hooks/useExpand";
import useScroll from "../../Hooks/useScroll";

const MediaL = () => {
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
        <SimpleGrid templateColumns="1fr 1fr" w="90vw" minH="75vh" mx="auto">
          <Box pl="100">
            <Stack spacing={10} mt="20" pb={'100'}>
              <Text color="#99825b" fontSize="20px" mt="3">
                地理优势
              </Text>
              <Text fontSize="20px" lineHeight="30px" color="black">
                在风土一词的概念中，饱含法国传统的葡萄酒文化信息，在其他语言中难以找到与其意义相称的词汇。风土是优质葡萄酒的遗传精髓，没有了它，一切都不复存在。但是，只有人们的辛勤耕作与发奋图强，风土的个性方可得到真正的张扬与提升。
              </Text>
              <Collapse in={isExpand} animateOpacity>
                <Text fontSize="20px" lineHeight="30px" color="black">
                  事实上，如果没有人们这种高度的关注与热情，那么任何一片格雷夫石子地山丘，即便它有多么得天独厚，也不会成为一个优质葡萄园。选择最合适的葡萄品种，确定葡萄植株的生长条件，完善酿造和陈化工艺，人们整整用了五百多年摸索出一套培育高品质葡萄酒的好方法。
                </Text>
              </Collapse>

              {!isExpand && (
                <Button
                  w="225px"
                  h="70px"
                  mb="8"
                  fontSize="16px"
                  color="#cab57e"
                  bg="#000000"
                  _hover={{ bg: "#333333" }}
                  onClick={handleTaggle}
                >
                  了解更多
                </Button>
              )}
            </Stack>
          </Box>
          <Box position="relative" overflow="hidden">
            <Box width="90%" mx={'auto'}>
              <Image
                objectFit="cover"
                src="https://s3-eu-west-3.amazonaws.com/cm-site/wp-content/uploads/2018/03/10162631/Un-site-privil%C3%87gi%C3%87-proposition-1-600x401.jpg"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MediaL;
