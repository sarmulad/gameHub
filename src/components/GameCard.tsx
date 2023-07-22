import React from 'react'
import {Games} from '../hooks/useGames'
import {Card, Image, CardBody, Heading } from '@chakra-ui/react'

 interface Props{
    game: Games
 }

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} >
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard