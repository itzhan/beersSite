import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'
import homeBg from '../../img/mediaHomeBg.png'

const TerroirHome = () => {
  return (
    <Center w={'100vw'} h={'100vh'}> 
        <Center w={'688px'} h={'427px'} bgImg={`url(${homeBg})`} pb={'10'}>
            <Stack spacing={'5'} align={'center'}>
                <Text color={'#99825b'} fontSize={'2xl'} textTransform={'uppercase'}>chateau marjaux</Text>
                <Text color={'black'} fontSize={'2xl'}>卓越风土孕育上乘佳酿</Text>
                <Heading as={'h1'} fontWeight={'450'} fontSize={'150px'} color={'#bbab7c'}>风土</Heading>
            </Stack>
        </Center>
    </Center>
  )
}

export default TerroirHome
