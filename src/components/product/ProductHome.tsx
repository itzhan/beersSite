import { Box, Center, Stack, Text, Img, keyframes } from "@chakra-ui/react";
import productBg from "../../img/productBg.jpg";
import productHome from "../../img/mediaHomeBg.png";
import bottle from "../../img/bottle.png";
import useScroll from "../../Hooks/useScroll";
import bottleBorder from "../../img/bottleBorder.png";
import showdow from "../../img/shadow.png";
import DownIcon from "../AnimatedIcon";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const imageStyle = {
  animation: `${fadeIn} 4s ease-in-out`,
};

const ProductHome = () => {
  const scrollY = useScroll();
  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      spacing={"100px"}
      alignItems={"center"}
      pt={"100px"}
      bgImage={`url(${productBg})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center>
        <Box
          w={"688px"}
          h={"430px"}
          bgImage={`url(${productHome})`}
          mixBlendMode="overlay"
          opacity="1"
          position="absolute"
          mb={"170"}
          zIndex={0}
        />
        <Box style={{ transform: `translateY(${-scrollY * 0.05}px)` }}>
          <Stack align={"center"}>
            <Box position="relative" width={"200px"} height={"588px"}>
              {" "}
              {/* 修改高度以适应阴影 */}
              <Img
                src={bottleBorder}
                width={"200px"}
                height={"560px"}
                position="absolute"
                top="0"
                left="0"
                opacity={1} // 设置轮廓图的透明度
                zIndex={1}
                filter="grayscale(100%) brightness(0)"
              />
              <Img
                src={bottle}
                width={"200px"}
                height={"560px"}
                css={imageStyle}
                position="relative"
                zIndex={2}
              />
              <Img
                src={showdow}
                objectFit="cover"
                width="500px"
                height="auto"
                position="absolute"
                top="520px"
                zIndex={0} // 确保阴影在最底层
                objectPosition="center"
                transform="scale(4)"
              />
            </Box>
            <Box
              mt="-50px"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <DownIcon />
            </Box>
          </Stack>
        </Box>
      </Center>
    </Stack>
  );
};

export default ProductHome;
