import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {

  const cardsData = [
    {
      title: 'Título A',
      description: 'Descripción A',
      assignedPerson: 'Ana Gomez',
      startDate: '2024-09-01',
      endDate: '2024-12-31'
    },
    {
      title: 'Título B',
      description: 'Descripción B',
      assignedPerson: 'Luis Carlos',
      startDate: '2024-10-15',
      endDate: '2025-01-15'
    },
    {
      title: 'Título C',
      description: 'Descripción C',
      assignedPerson: 'Roberto Benitez',
      startDate: '2024-11-01',
      endDate: '2025-03-31'
    }
  ];

  return (
<div className="app">
      {cardsData.map((card, index) => (
        <Card key ={index}>
          <h2 className = "title">{card.title}</h2>
            <div className = "info">
                <p>Descripción: {card.description}</p>
                <p>Persona asignada: {card.assignedPerson}</p>
                <p>Fecha inicio: {card.startDate}</p>
                <p>Fecha fin: {card.endDate}</p>
              </div>
        </Card>
      ))}
    </div>
  )
}

export default App
