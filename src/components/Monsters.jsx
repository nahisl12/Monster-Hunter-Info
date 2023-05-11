import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';

// displays ALL monsters
// eslint-disable-next-line react/prop-types
const Monsters = ({ isLoading, setIsLoading }) => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getMonsters = async () => {
      setIsLoading(true)

      const monsterInfo = await getData('https://mhw-db.com/monsters');

      if(!ignore) {
        setMonsters(monsterInfo);
        setIsLoading(false);
      }
    }

    getMonsters();

    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>All Monsters</Heading>

      {/* was previously a flex - can change back if need be but this wya we can have 4 in a row */}
      {
        isLoading ? 
        (
          <CircularProgress isIndeterminate color='green.300' mt='10'/>
        ) :
        (
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap='5' mt='10'>
          {
            (
              monsters.map(monster => {
                return (
                  <InfoCard key={monster.id} img={monster?.img} name={monster.name} description={monster.description} ></InfoCard>
                )
              })
            )
          }
        </Grid>
        )
      }
    </>
  )
}

export default Monsters;