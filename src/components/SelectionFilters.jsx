/* eslint-disable react/prop-types */
import { Flex, Button, Image } from '@chakra-ui/react';

const SelectionFilters = ({ data, actionFunction }) => {
  return (
    <Flex flexWrap='wrap' gap='5' mt='10' justify='center'>
    {
        data.map(item => (
        <Button key={item.type} colorScheme='green' leftIcon={<Image src={item.icon} boxSize='7' />} onClick={() => actionFunction(item.query_value)}>{item.type}</Button>
        ))
    }
    </Flex>
  )
}

export default SelectionFilters;