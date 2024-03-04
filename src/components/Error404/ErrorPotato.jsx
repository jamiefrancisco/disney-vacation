import { Link } from 'react-router-dom';
import './ErrorPotato.css';

function ErrorPotato() {

  return (
    <div className="potato-error-container">
      <h2>Error: Potato Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-to-home-button">Back to Home</Link>
    </div>
  );
}

export default ErrorPotato;
