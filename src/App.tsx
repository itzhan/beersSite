import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import io from "./lo.json";
import { Box } from "@chakra-ui/react";
import Home from "./components/Home";
import AnimatedBox from "./components/Border";

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
    <Box w={'100vw'} h={'100vh'}>
        <AnimatedBox/>
    </Box>
  );
}

export default App;
