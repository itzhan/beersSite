import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: any;
}

const BorderShadowEffect = ({ children }: Props) => {
  const customStyles = {
    "--start-color": "gold",
    "--hover-color": "white",
    "--glow-color": "gold",
  } as React.CSSProperties;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      margin="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#fff"
      overflow="hidden"
      transition="background 350ms 600ms ease-in-out"
      _hover={{
        background: "#2c3e50",
        transitionDelay: "0ms",
        "&::after": {
          boxShadow: `
            calc(-50vw) calc(-50vh + 2px) 0 0 var(--hover-color),
            calc(-50vw) calc(-50vh + 2px) 0 0 transparent,
            0 calc(-50vh + 2px) 0 0.0619em var(--hover-color),
            calc(50vw - 2px) calc(-50vh * 2) 0 0 var(--hover-color),
            calc(50vw - 2px) calc(-50vh) 0 0 transparent,
            calc(50vw - 2px) 0 0 0 var(--hover-color),
            calc(-50vw + 2px) 0 0 var(--hover-color),
            calc(-50vw + 2px) 100vh 0 0 transparent,
            calc(-50vw + 2px) calc(100vh * 2) 0 0 var(--hover-color),
            0 calc(50vh - 2px) 0 0.0619em var(--hover-color),
            calc(50vw + 2px) calc(50vh - 2px) 0 0 transparent,
            calc(50vw * 2) calc(50vh - 2px) 0 0 var(--hover-color)
          `,
          transition: "box-shadow 950ms ease-in-out",
        },
        "& > span": {
          color: "#fff",
          transitionDelay: "0ms",
          textShadow: "0 0 8px var(--glow-color), 0 0 16px var(--glow-color)",
        },
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "1px",
        left: "1px",
        width: "calc(100vw - 2px)",
        height: "calc(100vh - 2px)",
        transition: "box-shadow 950ms ease-in-out",
        boxShadow: `
          0 calc(-50vh + 2px) 0 0.0619em var(--start-color),
          calc(50vw + 2px) calc(-50vh + 2px) 0 0 transparent,
          calc(50vw * 2 + 2px) calc(-50vh + 2px) 0 0 var(--start-color),
          calc(50vw - 2px) 0 0 0 var(--start-color),
          calc(50vw - 2px) 100vh 0 0 transparent,
          calc(50vw - 2px) 200vh 0 0 var(--start-color),
          calc(-50vw + 2px) calc(-50vh * 2) 0 0 var(--start-color),
          calc(-50vw + 2px) calc(-50vh) 0 0 transparent,
          calc(-50vw + 2px) 0 0 0 var(--start-color),
          calc(-50vw * 2) calc(100vh - 2px) 0 0 var(--start-color),
          calc(-50vw * 2) calc(100vh - 2px) 0 0 transparent,
          0 calc(50vh - 2px) 0 0.0619em var(--start-color)
        `,
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        border: "2px solid #2c3e50",
        boxShadow: "0 0 8px var(--glow-color), 0 0 16px var(--glow-color)",
        transition: "box-shadow 350ms ease-in-out",
      }}
      style={customStyles}
    >
      {children}
    </Box>
  );
};

export default BorderShadowEffect;
