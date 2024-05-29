import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@chakra-ui/react";

interface Props {
  children: any;
}

const createLineAnimation = (lineRef: any) => {
  useEffect(() => {
    const length = lineRef.current.getTotalLength();

    // 设置初始样式
    gsap.set(lineRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // 创建动画
    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 1.3,
      delay: 0.1,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = this.progress();
        const color = gsap.utils.interpolate(
          "#EEE8AA",
          "rgba(255, 255, 255, 0.4)",
          progress
        );
        gsap.set(lineRef.current, { stroke: color });
      },
    });
  }, [lineRef]);
};

const Border = ({ children }: Props) => {
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const lineRef3 = useRef(null);
  const lineRef4 = useRef(null);

  const lineRef5 = useRef(null);
  const lineRef6 = useRef(null);
  const lineRef7 = useRef(null);
  const lineRef8 = useRef(null);

  createLineAnimation(lineRef1);
  createLineAnimation(lineRef2);
  createLineAnimation(lineRef3);
  createLineAnimation(lineRef4);

  createLineAnimation(lineRef5);
  createLineAnimation(lineRef6);
  createLineAnimation(lineRef7);
  createLineAnimation(lineRef8);

  const outerMargin = 13; // 外层矩形的距离
  const innerMargin = 15.5; // 内层矩形的距离

  const outerX1 = outerMargin - 2;
  const outerY1 = outerMargin + 2;
  const outerX2 = 600 - outerMargin + 2;
  const outerY2 = 600 - outerMargin - 2;

  const innerX1 = innerMargin;
  const innerY1 = innerMargin + 6;
  const innerX2 = 600 - innerMargin;
  const innerY2 = 600 - innerMargin - 6;

  return (
    <Box position="relative" width="100%" height="100vh">
      <Box>{children}</Box>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // 不捕获鼠标事件
        }}
      >
        <line
          ref={lineRef1}
          x1={outerX1}
          y1={outerY1}
          x2={outerX1}
          y2={outerY2}
          strokeWidth="1.1"
          stroke="white"
        />
        <line
          ref={lineRef2}
          x1={outerX1}
          y1={outerY1}
          x2={outerX2}
          y2={outerY1}
          strokeWidth="1.1"
          stroke="white"
        />
        <line
          ref={lineRef3}
          x1={outerX2}
          y1={outerY2}
          x2={outerX1}
          y2={outerY2}
          strokeWidth="1.1"
          stroke="white"
        />
        <line
          ref={lineRef4}
          x1={outerX2}
          y1={outerY2}
          x2={outerX2}
          y2={outerY1}
          strokeWidth="1.1"
          stroke="white"
        />
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // 不捕获鼠标事件
        }}
      >
        <line
          ref={lineRef5}
          x1={innerX1}
          y1={innerY2}
          x2={innerX1}
          y2={innerY1}
          strokeWidth="0.8"
          stroke="white"
        />
        <line
          ref={lineRef6}
          x1={innerX1}
          y1={innerY2}
          x2={innerX2}
          y2={innerY2}
          strokeWidth="0.8"
          stroke="white"
        />
        <line
          ref={lineRef7}
          x1={innerX2}
          y1={innerY1}
          x2={innerX1}
          y2={innerY1}
          strokeWidth="0.8"
          stroke="white"
        />
        <line
          ref={lineRef8}
          x1={innerX2}
          y1={innerY1}
          x2={innerX2}
          y2={innerY2}
          strokeWidth="0.8"
          stroke="white"
        />
      </svg>
    </Box>
  );
};

export default Border;
