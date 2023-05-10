'use client'

import React, { ReactNode } from 'react'

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'

import Sidebar from '../../components/Home/Sidebar'
import MobileNav from '../../components/Home/MobileNav'

export default function Home({
  children
}: {
  children: ReactNode
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block'}}>
      </Sidebar>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
          <DrawerContent>
            <Sidebar onClose={onClose}></Sidebar>
          </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}