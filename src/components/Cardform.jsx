// CardForm.jsx
import React, { useState, useEffect } from 'react';
import './CreateCard.css';
const CardForm = ({ onSubmit, onCancel, existingCard }) => {
  const [title, setTitle] = useState(existingCard ? existingCard.title : '');
  const [description, setDescription] = useState(existingCard ? existingCard.description : '');
  const [imageUrl, setImageUrl] = useState(existingCard ? existingCard.imageUrl : '');

  useEffect(() => {
    if (existingCard) {
      setTitle(existingCard.title);
      setDescription(existingCard.description);
      setImageUrl(existingCard.imageUrl);
    }
  }, [existingCard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !imageUrl) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedCard = {
      ...existingCard,
      title,
      description,
      imageUrl,
    };

    onSubmit(updatedCard);
    onCancel();
  };

  return (
    <div>
    <div className="card-form">
      <h2>{existingCard ? 'Edit Card' : 'Create New Card'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={onSubmit}>{existingCard ? 'Save Changes' : 'Create Card'}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
    </div>
  );
};

export default CardForm;
