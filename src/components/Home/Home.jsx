import PropTypes from 'prop-types';

function Home({ image }) {
  return (
    <div className="home-container">
      <h2>Welcome to Your Disney Vacation!</h2>
      {image && <img src={image} alt="Disney Vacation" />}
    </div>
  );
}

Home.propTypes = {
  image: PropTypes.string,
};

export default Home;

