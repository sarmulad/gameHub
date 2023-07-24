import useGenres, { Genres } from '../hooks/useGenres'
import {  HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react'
import getCroppedImg from '../services/getCroppedImg'


interface Props{
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
      const { data, isLoading, error } =  useGenres()
      if(isLoading) return <Spinner/>
      if(error) return null;
  return (
    <List>
        {data.map(genre => 
           <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
                <Image boxSize="32px" 
                  borderRadius={8} 
                  src={getCroppedImg(genre.image_background)}
                  />
                <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal" } variant="link" fontSize={'lg'} onClick={()=>onSelectedGenre(genre)}>
                 {genre.name}
                </Button>

            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList