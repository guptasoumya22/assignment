// CardDetail.jsx
import React from 'react';

const CardDetail = ({ card, onClose, onEdit }) => {
  return (
    <div className="card-detail">
      <div className="card-detail-content">
        <h2>{card.author}</h2>
        <p>{card.width} x {card.height}</p>
        <img src={card.download_url} alt={card.author} />
        <div className="card-detail-buttons">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
