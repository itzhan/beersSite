interface SpriteSheetProps {
  imageUrl: string; // 精灵图URL
  frameWidth: number; // 每个关键帧的宽度
  frameHeight: number; // 每个关键帧的高度
  spriteColumns: number; // 精灵图的列数
  spriteRows: number; // 精灵图的行数
  startColumn: number; // 动画起始列
  startRow: number; // 动画起始行
  endColumn: number; // 动画终止列
  endRow: number; // 动画终止行
  loopCount: number; // 循环次数，-1表示无限次
  duration: number; // 动画总时长，单位毫秒
  scale: number; //放大或缩小的倍数
}

import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const SpriteSheet: React.FC<SpriteSheetProps> = ({
  imageUrl,
  frameWidth,
  frameHeight,
  spriteColumns,
  startColumn,
  startRow,
  endColumn,
  endRow,
  loopCount,
  duration,
  scale = 1,
}) => {
  const [currentFrame, setCurrentFrame] = useState({
    row: startRow,
    column: startColumn,
  });
  const frameRef = useRef<HTMLDivElement>(null);
  const frameCount =
    (endRow - startRow) * spriteColumns + (endColumn - startColumn) + 1;
  const intervalDuration = duration / frameCount;
  const loops = loopCount === -1 ? Infinity : loopCount;

  useEffect(() => {
    let loopCounter = 0;
    let animationFrame = startRow * spriteColumns + startColumn;

    const intervalId = setInterval(() => {
      const nextFrame = animationFrame + 1;
      const nextColumn = nextFrame % spriteColumns;
      const nextRow = Math.floor(nextFrame / spriteColumns);

      if (nextRow > endRow || (nextRow === endRow && nextColumn > endColumn)) {
        animationFrame = startRow * spriteColumns + startColumn;
        loopCounter += 1;
        if (loopCounter >= loops) {
          clearInterval(intervalId);
        }
      } else {
        animationFrame = nextFrame;
      }

      setCurrentFrame({
        row: Math.floor(animationFrame / spriteColumns),
        column: animationFrame % spriteColumns,
      });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [
    duration,
    frameCount,
    intervalDuration,
    loops,
    spriteColumns,
    startColumn,
    startRow,
    endColumn,
    endRow,
  ]);

  const backgroundPositionX = -currentFrame.column * frameWidth;
  const backgroundPositionY = -currentFrame.row * frameHeight;

  return (
    <Box
      ref={frameRef}
      width={frameWidth}
      height={frameHeight}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
        backgroundRepeat: "no-repeat",
      }}
      transform={`scale(${scale})`}
    />
  );
};

export default SpriteSheet;
