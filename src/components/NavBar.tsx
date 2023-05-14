import { HStack,Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <HStack marginBottom={5}>
            <Image src={logo} boxSize="40px" />
            <SearchInput/>
            <ColorModeSwitch />
        </HStack>
    );
};
export default NavBar;