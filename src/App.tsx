
import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      gridTemplateColumns={'30vw'}
    >
      <GridItem area="nav" bg="coral" width='100' h='10'>
        Nav
      </GridItem>
      <Show above='lg'>
        {/* greater than 1024Px, implement this */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      
      <GridItem area="main" bg="skyblue">
        Main
      </GridItem>
    </Grid >
  );
}

export default App;
