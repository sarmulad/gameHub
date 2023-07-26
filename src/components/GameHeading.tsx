import { Heading } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames';
import { Genres } from '../hooks/useGenres';


interface Props{
    selectedGenre: Genres | null;
    selectedPlatform: Platform | null;
}


const GameHeading = ({selectedGenre, selectedPlatform}:Props) => {

    const heading = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
       {heading}
    </Heading>
  )
}

export default GameHeading