import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditCaption({ onSave }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [caption, setCaption] = useState(location.state.caption);

  const handleSave = () => {
    onSave(location.state.image, caption);
    navigate('/saved-cards');
  };

  return (
    <div>
      <img src={location.state.image} alt="Caption Edit" />
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditCaption;
