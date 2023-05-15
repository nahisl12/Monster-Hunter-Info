import {
  Box,
  Button,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Pagination = ({ numOfPages, currPage, setCurrPage }) => {
  const pagesArray = [...Array(numOfPages + 1).keys()].slice(1);

  const previousPage = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
    }
  }

  const nextPage = () => {
    if (currPage !== numOfPages) {
      setCurrPage(currPage + 1);
    }
  }

  return (
    <Box w='100%' mt='10'>
      <UnorderedList display='flex' flexWrap='wrap' gap='5' justifyContent='center'>
        <ListItem listStyleType='none'>
          <Button colorScheme='green' onClick={previousPage}>Previous</Button>
        </ListItem>
        {
          pagesArray.map(page => (
              <ListItem key={page} listStyleType='none'>
                <Button colorScheme={page === currPage ? 'blue' : 'green'} onClick={() => setCurrPage(page)} >{page}</Button>
              </ListItem>
          ))
        }
        <ListItem listStyleType='none'>
          <Button colorScheme='green' onClick={nextPage}>Next</Button>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default Pagination