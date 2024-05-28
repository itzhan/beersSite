import spriteSheet from "../img/icon.png";
import AnimatedSprite from "./AnimatedSprite";

const DownIcon = () => {
  return (
    <AnimatedSprite
      imageUrl={spriteSheet}
      frameHeight={160}
      frameWidth={160}
      spriteRows={8}
      spriteColumns={7}
      startRow={4}
      startColumn={1}
      endRow={7}
      endColumn={2}
      loopCount={-1}
      duration={1000}
      scale={0.35}
    />
  );
};

export default DownIcon;
