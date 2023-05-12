import { HStack, List, ListItem,Text,Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { genres, isLoading, error } = useGenres();
    if (error) return null;
    if(isLoading) return <Spinner/>
  return (
      <List>
          {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                  <Image paddingX='5px' borderRadius={8} boxSize='32px' src= {getCroppedImageUrl(genre.image_background)}/>
                 
                  <Text fontSize='lg'>
                      {genre.name}
                  </Text>
              </HStack>
          </ListItem>)}
    </List>
  )
}

export default GenreList