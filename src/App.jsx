import React,{useEffect,useState} from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Card from "./components/Card";
import './App.css';
import Dashboard from "../src/components/Dashboard";
import CreateCard from '../src/components/CreateCard';
import CardDetail from "./components/CardDetail";
import axios from 'axios';
import { CardProvider } from '../src/components/CardContext';
const API_URL = 'https://picsum.photos/v2/list?page=1&limit=6';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('/')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <BrowserRouter>
        
        <Sidebar>
        <CardProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-card" element={<CreateCard />} />
            <Route path="/card/:cardId" element={<CardDetail />} /> 
            <Route path="/my-projects" element={<Dashboard />} />
            <Route path="/sample-projects" element={<Dashboard />} />
            <Route path="/apps" element={<Dashboard />} />
            <Route path="/intro-to-necleo" element={<Dashboard />} />
            <Route path="/help" element={<Dashboard />} />
            <Route path="/feedback" element={<Dashboard />} />
            <Route path="/collapse" element={<Dashboard />} />
          </Routes>
          </CardProvider>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}
export default App;
