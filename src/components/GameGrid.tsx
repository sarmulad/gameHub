import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
    const {games, error} = useGames();
   return (
    <div>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing={10}>
            {games.map(game=>(
              <GameCard key={game.id} game={game}/>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid;