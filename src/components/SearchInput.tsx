import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSearchChange: (searchText:string) => void;
}
const SearchInput = ({onSearchChange}:Props) => {
   const ref= useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearchChange(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} variant="filled" placeholder="Search games..." borderRadius={20}/>
                  </InputGroup>
        </form>
  )
}

export default SearchInput