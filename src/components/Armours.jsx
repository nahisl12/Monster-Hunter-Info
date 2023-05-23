/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';
import SelectionFilters from './SelectionFilters';
import Pagination from './Pagination';

// img imports
import head from '../assets/icons/Helmet_Icon_White.png';
import chest from '../assets/icons/Chest_Icon_White.png';
import gloves from '../assets/icons/Glove_Icon_White.png';
import waist from '../assets/icons/Waist_Icon_White.png';
import legs from '../assets/icons/Leg_Icon_White.png';

const armourTypes = [
  {'type': 'Head', 'query_value' : 'head', 'icon': head},
  {'type': 'Chest', 'query_value' : 'chest', 'icon': chest},
  {'type': 'Gloves', 'query_value' : 'gloves', 'icon': gloves},
  {'type': 'Waist', 'query_value' : 'waist', 'icon': waist},
  {'type': 'Legs', 'query_value' : 'legs', 'icon': legs},
];

const Armours = ({ isLoading, setIsLoading }) => {
  const [armourSets, setArmourSets] = useState([]);

  // pagination info
  const [currPage, setCurrPage] = useState(1);
  const [resultsPerPage] = useState(16);
  const numOfPages = Math.ceil(armourSets.length / resultsPerPage);
  const lastItem = currPage * resultsPerPage;
  const firstItem = lastItem - resultsPerPage;
  const resultsToDisplay = armourSets.slice(firstItem, lastItem);  // this is the array trimmed down and used for displaying

  useEffect(() => {
    let ignore = false;

    const getArmourSets = async () => {
      setIsLoading(true)

      // only grabbing the first 15 results at the moment - will make this dynamic and add pagination soon
      const armourInfo = await getData('https://mhw-db.com/armor?q={"type":"head"}');

      if(!ignore) {
        setArmourSets(armourInfo);
        setIsLoading(false);
      }
    }

    getArmourSets();

    return () => {
      ignore = true;
    }
  }, []);

  const getArmourOfType = async (query_value) => {
    setIsLoading(true);

    const armourInfo = await getData(`https://mhw-db.com/armor?q={"type":"${query_value}"}`);

    setArmourSets(armourInfo);
    setIsLoading(false);
  }

  return (
    <>
      <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>All Armour Sets</Heading>
      <SelectionFilters data={armourTypes} actionFunction={getArmourOfType} />
      {
        isLoading ? 
        (
          <CircularProgress isIndeterminate color='green.300' mt='10'/>
        ) :
        (
        <>
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap='5' mt='10'>
            {
              (
                resultsToDisplay.map(armour => {
                  return (
                    <InfoCard 
                      key={armour.id} 
                      img={armour.pieces ? armour.pieces[0].assets.imageMale : armour?.assets?.imageMale } 
                      name={armour.name} 
                      description={`${armour.rank}`}
                      linkLoc={`${armour.name}`}
                      dataObj={armour} 
                    >
                    </InfoCard>
                  )
                })
              )
            }
          </Grid>
          { numOfPages > 1 && <Pagination numOfPages={numOfPages} currPage={currPage} setCurrPage={setCurrPage} /> }
          </>
        )
      }
    </>
  )
}

export default Armours;