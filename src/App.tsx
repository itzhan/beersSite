import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Productpage from "./components/product/Productpage";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TerroirPage from "./components/terroir/TerroirPage";
import AnimatedSprite from "./components/AnimatedSprite";
import spriteSheet from '../src/img/icon.png'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // 动画持续时间（毫秒）
      // once: true,     // 动画只执行一次
    });
  }, []);
  
  return (
  );
}

export default App;
