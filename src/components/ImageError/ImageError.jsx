import PropTypes from 'prop-types';

function ImageError ({ handleRefresh }) {
  return (
    <div>
      <img src="https://bit.ly/4bSmL1S" alt="Fallback illustration" />
      <p>Image failed to load. Here is a fallback image.</p>
      <button onClick={handleRefresh}>Refresh Page</button>
    </div>
  );
}

ImageError.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
};

export default ImageError;