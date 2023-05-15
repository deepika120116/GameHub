import { HStack, List, ListItem,Text,Image, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";


interface Props{
    onSelectGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}
const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if(isLoading) return <Spinner/>
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
      <List>
          {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                  <Image paddingX='5px' borderRadius={8} boxSize='32px' objectFit="cover" src= {getCroppedImageUrl(genre.image_background)}/>
                  <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                      onClick={() => onSelectGenre(genre)} variant="link" fontSize='lg'>
                      {genre.name}
                  </Button>
              </HStack>
          </ListItem>)}
    </List>
  
        </>
        )
}

export default GenreList