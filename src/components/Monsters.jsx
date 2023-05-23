/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getData } from '../helpers/ApiCalls';
import { Grid, Heading, CircularProgress } from '@chakra-ui/react';
import InfoCard from './InfoCard.jsx';
import Pagination from './Pagination';

const Monsters = ({ isLoading, setIsLoading }) => {
  const [monsters, setMonsters] = useState([]);

    // pagination info
    const [currPage, setCurrPage] = useState(1);
    const [resultsPerPage] = useState(16);
    const numOfPages = Math.ceil(monsters.length / resultsPerPage);
    const lastItem = currPage * resultsPerPage;
    const firstItem = lastItem - resultsPerPage;
    const resultsToDisplay = monsters.slice(firstItem, lastItem);  // this is the array trimmed down and used for displaying

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
                resultsToDisplay.map(monster => {
                  return (
                    <InfoCard 
                      key={monster.id}
                      img={monster?.img} 
                      name={monster.name} 
                      description={monster.description} 
                      linkLoc={`${monster.name}`}
                      dataObj={monster}
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

export default Monsters;