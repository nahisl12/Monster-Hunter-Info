// This is the layout for detailed View
import { useLocation } from 'react-router-dom';

const DetailedView = () => {
  let { state } = useLocation();

  console.log(state);
  return (
    <>
      <div>{state}</div>
    </>
  )
}

export default DetailedView;