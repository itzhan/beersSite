import { Box } from "@chakra-ui/react";
import { LordIcon } from "../lord-icon";
import io from "../lo.json";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = () => {
  const blob = new Blob([JSON.stringify(io)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

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
        right={3}
        top={3}
        zIndex={"10"}
        _hover={{ cursor: "pointer" }}
      >
        <LordIcon src={url} trigger="click" size={55} />
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
