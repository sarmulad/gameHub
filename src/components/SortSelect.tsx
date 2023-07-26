import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
// import useSorts from '../hooks/useSorts'
// import { Sort } from '../hooks/useGames'

interface Props{
    onSelectSort: (Sort: string) => void;
    selectedSort: string;
}

const SortSelect = ({onSelectSort, selectedSort}:Props) => {
    const sortOrders = [
        {value:"", label: 'Relevance'},
        {value:"added", label:'Date added'},
        {value:"name ", label: 'Name'},
        {value:"-released", label: 'Release date'},
        {value:"-metacritic", label: 'Popularity'},
        {value:"-rating", label: 'Average rating'},
    ]

    const currentSort = sortOrders.find(sort => sort.value === selectedSort )
     // filter returns array while find returns a single item
    
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
         Order by:{ currentSort?.label || "relevance"}
         </MenuButton>
        <MenuList>
          {sortOrders.map(order=>
            <MenuItem onClick={()=> onSelectSort(order.value)} key={order.value} value={order.value}>
               {order.label}
            </MenuItem> 
            )}
            
        </MenuList>
    </Menu>
  )
}

export default SortSelect