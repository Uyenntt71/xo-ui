"use client"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Icon,
    InputLeftElement,
    InputGroup,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
    FiUser, FiLock
} from 'react-icons/fi'
import logo from '../../images/xo_logo.png';

export default function LoginPage() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Image src={logo} alt='xo xo' />
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <InputGroup id="email">
                            <InputLeftElement>
                                <Icon as={FiUser} />
                            </InputLeftElement>
                            <Input type="email" placeholder='Tài khoản' isRequired />
                        </InputGroup>
                        <InputGroup id="password">
                            <InputLeftElement><Icon as={FiLock} />
                            </InputLeftElement>
                            <Input type="password" placeholder='Mật khẩu' isRequired />
                        </InputGroup>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                            </Stack>
                            <Button>
                                Đăng nhập
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}