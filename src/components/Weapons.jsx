import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';
import Pagination from './Pagination';
import SelectionFilters from './SelectionFilters';

// displays ALL weapons - big changes in layout for this one:
// Organize by weapon types (separate tabs for each perhaps?) and possibly further categories each weapon as there's nearly 1.4k weapons

const weaponTypes = [
  {'type': 'Great Sword', 'query_value' : 'great-sword', 'icon': 'src/assets/icons/Great_Sword_Icon_White.png'},
  {'type': 'Sword & Shield', 'query_value' : 'sword-and-shield', 'icon': 'src/assets/icons/Sword_and_Shield_Icon_White.png'},
  {'type': 'Dual Blades', 'query_value' : 'dual-blades', 'icon': 'src/assets/icons/Dual_Blades_Icon_White.png'},
  {'type': 'Long Sword', 'query_value' : 'long-sword', 'icon': 'src/assets/icons/Long_Sword_Icon_White.png'},
  {'type': 'Hammer', 'query_value' : 'hammer', 'icon': 'src/assets/icons/Hammer_Icon_White.png'},
  {'type': 'Hunting Horn', 'query_value' : 'hunting-horn', 'icon': 'src/assets/icons/Hunting_Horn_Icon_White.png'},
  {'type': 'Lance', 'query_value' : 'lance', 'icon': 'src/assets/icons/Lance_Icon_White.png'},
  {'type': 'Gunlance', 'query_value' : 'gunlance', 'icon': 'src/assets/icons/Gunlance_Icon_White.png'},
  {'type': 'Switch Axe', 'query_value' : 'switch-axe', 'icon': 'src/assets/icons/Switch_Axe_Icon_White.png'},
  {'type': 'Charge Blade', 'query_value' : 'charge-blade', 'icon': 'src/assets/icons/Charge_Blade_Icon_White.png'},
  {'type': 'Insect Glaive', 'query_value' : 'insect-glaive', 'icon': 'src/assets/icons/Insect_Glaive_Icon_White.png'},
  {'type': 'Bow', 'query_value' : 'bow', 'icon': 'src/assets/icons/Bow_Icon_White.png'},
  {'type': 'Light Bowgun', 'query_value' : 'light-bowgun', 'icon': 'src/assets/icons/Light_Bowgun_Icon_White.png'},
  {'type': 'Heavy Bowgun', 'query_value' : 'heavy-bowgun', 'icon': 'src/assets/icons/Heavy_Bowgun_Icon_White.png'}
];

// eslint-disable-next-line react/prop-types
const Weapons = ({ isLoading, setIsLoading }) => {
  const [weapons, setWeapons] = useState([]);

  // pagination stuff
  const [currPage, setCurrPage] = useState(1);
  const [resultsPerPage] = useState(16);
  const numOfPages = Math.ceil(weapons.length / resultsPerPage);
  const lastItem = currPage * resultsPerPage;
  const firstItem = lastItem - resultsPerPage;
  const resultsToDisplay = weapons.slice(firstItem, lastItem);  // this is the array trimmed down and used for displaying

  useEffect(() => {
    let ignore = false;

    const getWeapons = async () => {
      setIsLoading(true)

      const weaponInfo = await getData('https://mhw-db.com/weapons?q={"id":{"$lte":16}}');

      if(!ignore) {
        setWeapons(weaponInfo);
        setIsLoading(false);
      }
    }

    getWeapons();

    return () => {
      ignore = true;
    }
  }, []);

  const getWeaponsOfType = async (query_value) => {
    setIsLoading(true);

    const weaponInfo = await getData(`https://mhw-db.com/weapons?q={"type":"${query_value}"}`);

    setWeapons(weaponInfo);
    setIsLoading(false);
  }

  return (
    <>
      <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>All Weapons</Heading>
      <SelectionFilters data={weaponTypes} actionFunction={getWeaponsOfType} />
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
                resultsToDisplay.map(weapon => {
                  return (
                    <InfoCard 
                      key={weapon.id} 
                      img={weapon.assets?.image} 
                      name={weapon.name} 
                      description={`${weapon.type} attack: ${weapon.attack.display}`} 
                      linkLoc={`${weapon.name}`}
                      dataObj={weapon}
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

export default Weapons;