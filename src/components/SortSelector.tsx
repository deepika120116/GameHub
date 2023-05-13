import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
              Order By: Relevance
          </MenuButton>
          <MenuList>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date Added</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Realease Date</MenuItem>
              <MenuItem>Average Rating</MenuItem>
          </MenuList>
  </Menu>
  )
}

export default SortSelector