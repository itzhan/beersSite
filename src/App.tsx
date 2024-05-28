import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productpage from "./components/product/Productpage";
import io from "./lo.json";
import { LordIcon } from "./lord-icon";
import { Box } from "@chakra-ui/react";
import TerroirPage from "./components/terroir/TerroirPage";

function App() {
  const blob = new Blob([JSON.stringify(io)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  useEffect(() => {
    AOS.init({
      duration: 800, // 动画持续时间（毫秒）
      // once: true,     // 动画只执行一次
    });
  }, []);

  return (
    <Box>
        <TerroirPage/>
    </Box>
  );
}

export default App;
