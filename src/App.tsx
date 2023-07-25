import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genres } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/sortSelector';

function App() {
   const [selectedGenre, setselectedGenre ] = useState<Genres | null >(null)
   const [selectedPlatform, setselectedPlatform ] = useState<Platform | null >(null)
   const [selectedSort, setselectedSort ] = useState("")
   const [searchText, setsearchText ] = useState("")


  return (
     <Grid 
      templateAreas={{
       base:`"nav" "main"`,
       lg:`"nav nav " "aside main"`
      }}
       templateColumns={{
         base: '1fr',
         lg: '200px 1fr'
       }}
      >
       <GridItem area="nav" >
        <Navbar onSearch={(searchText => setsearchText(searchText))}/>
       </GridItem>
       <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre => setselectedGenre(genre))}/>
          </GridItem>
       </Show>
       <GridItem area="main" >
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform => setselectedPlatform(platform))}/>
        <SortSelector  onSelectSort={(sort:string) => setselectedSort(sort)} selectedSort= {selectedSort}/>
        </HStack>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedSort= {selectedSort} searchText={searchText} />
      </GridItem>

     </Grid>
  )
}

export default App;
