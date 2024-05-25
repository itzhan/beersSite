import { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  Collapse,
} from "@chakra-ui/react";
import bg1 from "../img/mediaBg.png";

const MediaL = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isExpand, setExpand] = useState(false);

  const handleTaggle = () => {
    setExpand(!isExpand);
  };

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
      <Box
        bgImage={`url(${bg1})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <SimpleGrid templateColumns="1fr 1fr">
          <Box pl="100">
            <Stack spacing={10}>
              <Text color="#cab57e" fontSize="2xl" mt="10">
                地理优势
              </Text>
              <Text fontSize="20px" lineHeight="30px" color={"black"}>
                在风土一词的概念中，饱含法国传统的葡萄酒文化信息，在其他语言中难以找到与其意义相称的词汇。风土是优质葡萄酒的遗传精髓，没有了它，一切都不复存在。但是，只有人们的辛勤耕作与发奋图强，风土的个性方可得到真正的张扬与提升。
              </Text>
              <Collapse in={isExpand}>
                <Text  mb={'8'} fontSize="20px" lineHeight="30px" color={"black"}>
                  事实上，如果没有人们这种高度的关注与热情，那么任何一片格雷夫石子地山丘，即便它有多么得天独厚，也不会成为一个优质葡萄园。选择最合适的葡萄品种，确定葡萄植株的生长条件，完善酿造和陈化工艺，人们整整用了五百多年摸索出一套培育高品质葡萄酒的好方法。
                </Text>
              </Collapse>
              {!isExpand && (
                <Button
                  w={"225px"}
                  h={"70px"}
                  mb={'8'}
                  fontSize={"16px"}
                  color={"#cab57e"}
                  bg={"#000000"}
                  _hover={{ bg: "#333333" }}
                  onClick={handleTaggle}
                >
                  了解更多
                </Button>
              )}
            </Stack>
          </Box>
          <Box position="relative" overflow="hidden">
            <Box width='70%' mx='auto'>
              <Image
                objectFit="cover"
                src="https://s3-eu-west-3.amazonaws.com/cm-site/wp-content/uploads/2018/03/10162708/01-XVI-600x381.jpg"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MediaL;
