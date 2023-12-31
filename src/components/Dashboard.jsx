// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Card from './Card';
import CardForm from './Cardform';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=8');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreateCard = (newCard) => {
    setCards([...cards, newCard]);
    setShowForm(false);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  const handleUpdateCard = (updatedCard) => {
    const updatedCards = cards.map((c) => (c.id === updatedCard.id ? updatedCard : c));
    setCards(updatedCards);
    setEditingCard(null);
    setShowForm(false);
  };

  const handleDeleteCard = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this card?');
    if (confirmed) {
      const updatedCards = cards.filter((c) => c.id !== id);
      setCards(updatedCards);
      setEditingCard(null);
      setShowForm(false);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>

      <main style={{ height: '88vh', overflowY: 'scroll' }}>
        <section className="card-container">
          <div className="card blank-card" onClick={() => setShowForm(true)}>
            <div className="card-content">
              <Link to="/create-card">Add New Card</Link>
            </div>
          </div>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onEdit={() => handleEditCard(card)}
              onDelete={() => handleDeleteCard(card.id)}
            />
          ))}
          {showForm && <CardForm onSubmit={handleCreateCard} />}
          {editingCard && (
            <CardForm
              onSubmit={handleUpdateCard}
              onCancel={() => setEditingCard(null)}
              existingCard={editingCard}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
