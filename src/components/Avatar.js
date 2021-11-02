import Portrait from '../images/portrait3.jpg';

const Avatar = ({ width, height }) => {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '50%',
    border: '1px solid white',
    // margin: '0 auto',
    backgroundImage: `url(${Portrait})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // marginBottom: '24px',
  };

  return (
    <div style={styles}></div>
  );
};

export default Avatar;
