import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';

// displays ALL Locations - will change layout later
// eslint-disable-next-line react/prop-types
const Locations = ({ isLoading, setIsLoading }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getLocations = async () => {
      setIsLoading(true)

      const locationInfo = await getData('https://mhw-db.com/locations');

      if(!ignore) {
        setLocations(locationInfo);
        setIsLoading(false);
      }
    }

    getLocations();

    return () => {
      ignore = true;
    }
  }, []);

  console.log(locations);

  return (
    <>
      <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>All Locations</Heading>

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
              locations.map(location => {
                return (
                  <InfoCard
                    key={location.id} 
                    img={location?.img} 
                    name={location.name} 
                    description={`${location.zoneCount} Zones`}
                    linkLoc={`${location.name}`}
                    dataObj={location}
                  >
                  </InfoCard>
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

export default Locations;