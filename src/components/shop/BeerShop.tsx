import { Center, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import BeerCard from "./BeerCard";

const BeerShop = () => {
  return (
    <>
        <Center h={"100vh"} bg={"#f1f1f1"}>
          <Stack spacing={'20'} align={'center'}>
            <Heading as={"h1"} fontSize={'70'} fontFamily={''} color={'#cab57e'}>产品选购</Heading>
            <SimpleGrid columns={3} spacing={"10"} w={"auto"} h={"auto"}>
              <BeerCard />
              <BeerCard />
              <BeerCard />
            </SimpleGrid>
          </Stack>
        </Center>
    </>
  );
};

export default BeerShop;
