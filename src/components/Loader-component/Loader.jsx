import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="#3f51b5"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 'auto',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />
);
