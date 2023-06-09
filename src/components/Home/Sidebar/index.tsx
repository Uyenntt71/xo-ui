import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { LinkItemProps } from '@/interfaces/common-interfaces'

import NavItem from '../NavItem'
import {
  FiHome,
  FiLayers
} from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'home', icon: FiHome },
  { name: 'campaign', icon: FiLayers }
]

export default function Sidebar(
  { onClose, ...rest }: SidebarProps
) {
  const router = useRouter();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between">
        <Text
          fontSize='2xl'
          fontFamily="monospace"
          fontWeight="bold">
          XO
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}