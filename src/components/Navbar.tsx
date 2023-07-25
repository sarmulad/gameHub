import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.png"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        {/* <Image src={logo} boxSize="60px"/> */}
        <Text fontWeight={'black'} fontSize={"50px"}>RAWG</Text>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar