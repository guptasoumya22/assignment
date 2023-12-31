// Card.jsx
import React from 'react';
import './Card.css';
const Card = ({ card, onClick, onEdit, onDelete }) => {
  return (
    <div className="card">    
      <img src={card.download_url} alt={card.author} onClick={onClick} />
      <div className="card-buttons">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
