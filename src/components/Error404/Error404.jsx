import { Link } from 'react-router-dom';
import './Error404.css';

function Error() {

  return (
    <div className="error-container">
      <h2>Error: Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-to-home-button">Back to Home</Link>
    </div>
  );
}

export default Error;
