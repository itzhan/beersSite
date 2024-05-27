import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import bg from "../../img/productBg2.jpg";

const ProductDetail = () => {
  return (
    <Center h={"100vh"} w={"100vw"} bg={"#181415"} objectFit={"cover"}>
      <Stack padding={20} spacing={"80px"}>
        <Heading
          fontWeight={"normal"}
          fontSize={"20px"}
          color={"#f9e6a0"}
          textAlign={"center"}
          letterSpacing={"0.1em"}
        >
          铁棍山药酒
        </Heading>
        <SimpleGrid columns={2} spacing={"40"} fontSize={"20px"} letterSpacing={"0.03em"}>
          <Text>
            自 18 世纪初以来，玛歌酒庄就酿造出了卓越而独特的白葡萄酒。
            <br />
            <br />
            我们对卓越品质的不懈追求促使我们在调配玛歌酒庄白葡萄酒时更加精挑细选。之所以能进行如此严格的筛选，是因为我们对不同的白葡萄土壤进行了广泛的分析和了解。
            <br />
            <br />
            这使我们能够尽可能调整葡萄园的工作，在每块地的最佳成熟期采收，并根据不同的葡萄品种调整酿造和陈酿。
          </Text>
          <Text>
            这项严谨的工作不仅提高了玛歌酒庄白马庄的品质，还酿造出了品质极佳的副牌酒，因此决定从
            2022 年份开始装瓶。
            <br />
            <br />
            Pavillon Blanc Second Vin 与 Château Margaux 的 Pavillon Blanc
            一样，100%由长相思酿制而成，产自酒庄历史悠久的葡萄园。 <br />
            <br />
            Pavillon Blanc Second Vin 是酒庄五个世纪以来推出的第五款葡萄酒。
          </Text>
        </SimpleGrid>
      </Stack>
    </Center>
  );
};

export default ProductDetail;
