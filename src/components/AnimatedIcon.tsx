import { useEffect, useState } from "react";
import {  Box } from "@chakra-ui/react";
import spriteSheet from "../img/icon.png";

const spriteWidth = 160; // 每帧的宽度
const spriteHeight = 160; // 每帧的高度
const columns = 7; // 列数
const rows = 8; // 行数
const frameCount = columns * rows; // 总帧数
const animationDuration = 2; // 动画持续时间（秒）
const interval = (animationDuration * 1000) / frameCount; // 每帧展示时间（毫秒

const AnimatedIcon = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  const row = Math.floor(currentFrame / columns);
  const column = currentFrame % columns;

  return (
    <Box
      width={`${spriteWidth}px`}
      height={`${spriteHeight}px`}
      background={`url(${spriteSheet}) -${column * spriteWidth}px -${row * spriteHeight}px`}
      backgroundSize={`${spriteWidth * columns}px ${spriteHeight * rows}px`}
      transform="scale(0.5)"
    />
  );
};

export default AnimatedIcon;
