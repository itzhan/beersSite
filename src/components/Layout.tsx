import { Box, HStack, Text } from "@chakra-ui/react";
import { LordIcon } from "../lord-icon";
import cherrs from "../icon/cheersIcon.json";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blob = new Blob([JSON.stringify(cherrs)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  useEffect(() => {
    AOS.init({
      duration: 800, // 动画持续时间（毫秒）
      // once: true,     // 动画只执行一次
    });
  }, []);

  const handleClick = (event: any) => {
    event.preventDefault(); // 阻止默认导航行为
    // 触发动画后延迟导航
    setTimeout(() => {
      navigate("/");
    }, 1800); // 500ms 的延迟，可以根据需要调整
  };

  return (
    <>
      <Box
        position={"fixed"}
        right={10}
        top={10}
        zIndex={"1"}
        _hover={{ cursor: "pointer" }}
      >
        <HStack onClick={handleClick}>
          <Text fontSize={"13px"}  color={location.pathname === '/terroir' ? 'black' : 'white'}>主页</Text>
          <LordIcon src={url} trigger="click" size={40} />
        </HStack>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
