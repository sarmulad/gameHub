import { SimpleGrid } from "@chakra-ui/react";
import  useGames from "../hooks/useGames";
import  {Genres} from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Platform } from "../hooks/usePlatForms";

interface Props{
    selectedGenre: Genres | null;
    selectedPlatform: Platform | null;
    selectedSort: string;
    searchText: string;
}


function GameGrid({selectedGenre, selectedPlatform, selectedSort, searchText}: Props) {
    const {games, error, isLoading} = useGames(selectedGenre, selectedPlatform, selectedSort, searchText);
    const Skeleton = [1,2,3,4,5,6,7,8,9,10,11,12]

   return (
    <div>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding="10px" spacing={10}>
            {isLoading && Skeleton.map(item=> <GameCardSkeleton key={item}/>) }
            {games.map(game=>(
              <GameCard key={game.id} game={game}/>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid;