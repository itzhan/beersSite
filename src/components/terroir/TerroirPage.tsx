import MediaL from "./MediaL";
import MediaR from "./MediaR";
import TerroirHome from "./TerroirHome";
import { Box} from "@chakra-ui/react";

const TerroirPage = () => {
  return (
    <Box bg={"#f1f1f1"} position={"relative"}>
      <TerroirHome />
      <MediaL />
      <MediaR />
    </Box>
  );
};

export default TerroirPage;
