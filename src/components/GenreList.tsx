import useGenres from '../hooks/useGenres'

import { Text } from '@chakra-ui/react'

const GenreList = () => {
      const { data } =  useGenres()
  return (
    <div>
        {data.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
    </div>
  )
}

export default GenreList