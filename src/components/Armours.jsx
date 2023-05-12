import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';

// displays ALL armour sets - will change layout later
// eslint-disable-next-line react/prop-types
const Armours = ({ isLoading, setIsLoading }) => {
  const [armourSets, setArmourSets] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getArmourSets = async () => {
      setIsLoading(true)

      // only grabbing the first 15 results at the moment - will make this dynamic and add pagination soon
      const armourInfo = await getData('https://mhw-db.com/armor/sets?q={"id":{"$lte":16}}');

      if(!ignore) {
        setArmourSets(armourInfo);
        setIsLoading(false);

        console.log(armourInfo);
      }
    }

    getArmourSets();

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
              armourSets.map(armour => {
                return (
                  <InfoCard key={armour.id} img={armour?.pieces[0]?.assets?.imageMale} name={armour.name} description={`${armour.rank}`} ></InfoCard>
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

export default Armours;