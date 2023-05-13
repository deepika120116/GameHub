import { HStack, List, ListItem,Text,Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre: (genre: Genres) => void;
}
const GenreList = ({onSelectGenre}:Props) => {
    const { genres, isLoading, error } = useGenres();
    if (error) return null;
    if(isLoading) return <Spinner/>
  return (
      <List>
          {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                  <Image paddingX='5px' borderRadius={8} boxSize='32px' src= {getCroppedImageUrl(genre.image_background)}/>
                 
                  <Button onClick={()=>onSelectGenre(genre) } variant="link" fontSize='lg'>
                      {genre.name}
                  </Button>
              </HStack>
          </ListItem>)}
    </List>
  )
}

export default GenreList