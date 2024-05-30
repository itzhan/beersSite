import {
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductDetail = () => {
  return (
    <Center h={"100vh"} maxW={'1170px'} w={"100%"} objectFit={"cover"} mx={'auto'}>
      <Stack padding={20} spacing={"80px"}>
        <Heading
          as={'h2'}
          fontWeight={"normal"}
          fontSize={"20px"}
          color={"#c2a980"}
          textAlign={"center"}
          letterSpacing={"0.1em"}
          data-aos="fade-up"
        >
          铁棍山药酒
        </Heading>
        <Heading
          as={'h3'}
          fontWeight={"normal"}
          fontSize={"35px"}
          color={"#c2a980"}
          textAlign={"center"}
          letterSpacing={"0.1em"}
          data-aos="fade-up"
        >
          工艺精神的极致展现
        </Heading>
        <SimpleGrid columns={2} spacing={"40"} fontSize={"20px"} letterSpacing={"0.03em"}>
          <Text data-aos="fade-right">
            自 18 世纪初以来，玛歌酒庄就酿造出了卓越而独特的白葡萄酒。
            <br />
            <br />
            我们对卓越品质的不懈追求促使我们在调配玛歌酒庄白葡萄酒时更加精挑细选。之所以能进行如此严格的筛选，是因为我们对不同的白葡萄土壤进行了广泛的分析和了解。
            <br />
            <br />
            这使我们能够尽可能调整葡萄园的工作，在每块地的最佳成熟期采收，并根据不同的葡萄品种调整酿造和陈酿。
          </Text>
          <Text data-aos="fade-left">
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
