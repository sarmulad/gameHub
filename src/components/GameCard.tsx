import React from 'react'
import {Games} from '../hooks/useGames'
import {Card, Image, CardBody, Heading, Text, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImg from '../services/getCroppedImg'

 interface Props{
    game: Games
 }

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}  width={'300px'}>
        <Image src={ getCroppedImg(game.background_image)}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score= {game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard