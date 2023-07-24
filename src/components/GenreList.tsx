import useGenres from '../hooks/useGenres'

import {  HStack, List, ListItem, Image, Text } from '@chakra-ui/react'
import getCroppedImg from '../services/getCroppedImg'

const GenreList = () => {
      const { data } =  useGenres()
  return (
    <List>
        {data.map(genre => 
           <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
                <Image boxSize="32px" 
                  borderRadius={8} 
                  src={getCroppedImg(genre.image_background)}
                  />
                <Text fontSize={'lg'}>
                 {genre.name}
                </Text>

            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList