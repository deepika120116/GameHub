import { HStack,Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
interface Props{
    onSearchChange: (searchText: String) => void;
}
const NavBar = ({onSearchChange}:Props) => {
    return (
        <HStack margin={5}>
            <Image src={logo} boxSize="40px" />
            <SearchInput onSearchChange={onSearchChange}/>
            <ColorModeSwitch />
        </HStack>
    );
};
export default NavBar;