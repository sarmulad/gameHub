import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
    const {games, error, isLoading} = useGames();
    const Skeleton = [1,2,3,4,5,6]
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