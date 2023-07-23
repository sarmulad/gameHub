import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.png"
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        {/* <Image src={logo} boxSize="60px"/> */}
        <Text fontWeight={'black'} fontSize={"50px"}>RAWG</Text>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar