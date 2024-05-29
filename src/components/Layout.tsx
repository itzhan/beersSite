import { Box, HStack, Text } from "@chakra-ui/react";
import { LordIcon } from "../lord-icon";
import io from "../icon/io.json";
import cherrs from "../icon/cheersIcon.json";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = () => {
  const blob = new Blob([JSON.stringify(io)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const blob1 = new Blob([JSON.stringify(cherrs)], {
    type: "application/json",
  });
  const url1 = URL.createObjectURL(blob1);
  useEffect(() => {
    AOS.init({
      duration: 800, // 动画持续时间（毫秒）
      // once: true,     // 动画只执行一次
    });
  }, []);

  return (
    <div>
      <Box
        position={"fixed"}
        right={10}
        top={10}
        zIndex={"10"}
        _hover={{ cursor: "pointer" }}
      >
        <HStack>
          <Text fontSize={'13px'}>主页</Text>
          <LordIcon src={url1} trigger="click" size={40} />
        </HStack>
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
