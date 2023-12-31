// CreateCardPage.jsx
import React,{useState} from 'react';
import CardForm from './Cardform';
import './CreateCard.css';
import { useNavigate } from 'react-router-dom';
import { useCardContext } from './CardContext';


const CreateCard = () => {
    const navigate = useNavigate();
    const { addCard } = useCardContext();

  const onCancel = (id) => {
    
    navigate('/');
  };

  const onSubmit = (formData) => {
    addCard(formData);
    navigate('/');
  };

  return (
    <div className="create-card-page">
      <div className="card-form-container">
        {/* <h1>Create New Card</h1> */}
        <CardForm onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default CreateCard;
