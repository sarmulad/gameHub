import useGenres from '../hooks/useGenres'

import { Text } from '@chakra-ui/react'

const GenreList = () => {
      const {Genres} =  useGenres()
  return (
    <div>
        {Genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
    </div>
  )
}

export default GenreList