import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';

// displays ALL weapons - big changes in layout for this one:
// Organize by weapon types (separate tabs for each perhaps?) and possibly further categories each weapon as there's nearly 1.4k weapons

// eslint-disable-next-line react/prop-types
const Weapons = ({ isLoading, setIsLoading }) => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getWeapons = async () => {
      setIsLoading(true)

      const weaponInfo = await getData('https://mhw-db.com/weapons?q={"id":{"$lte":16}}');

      if(!ignore) {
        setWeapons(weaponInfo);
        setIsLoading(false);

        console.log(weaponInfo);
      }
    }

    getWeapons();

    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>All Armour Sets</Heading>

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
              weapons.map(weapon => {
                return (
                  <InfoCard key={weapon.id} img={weapon.assets?.image} name={weapon.name} description={`${weapon.type} attack: ${weapon.attack.display}`} ></InfoCard>
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

export default Weapons;