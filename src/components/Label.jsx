import { Tag, TagLabel, TagLeftIcon, TagCloseButton, Button } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Label = ({ text, color, icon, hasClose, isButton }) => {
  const AddWrapper = ({condition, wrapper, children}) => {
    if (condition) {
      return wrapper(children);
    }

    return children;
  }


  return (
    <>
      <AddWrapper
        condition={isButton}
        wrapper={children => <Button>{children}</Button>}
      >
        <Tag size='lg' variant='subtle' colorScheme={color}>
        { icon && <TagLeftIcon boxSize='12px' as={icon} />}
        <TagLabel>{ text }</TagLabel>
        { hasClose && <TagCloseButton /> }
        </Tag>
      </AddWrapper>
    </>
  )
}

export default Label