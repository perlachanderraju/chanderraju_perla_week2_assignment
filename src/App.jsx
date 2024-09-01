import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditEntry from './pages/EditEntry';
import ViewEntries from './pages/ViewEntries';
import AddEntry from './pages/AddEntry';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, { ...entry, id: uuidv4() }]);
  };

  const deleteEntry = (id) => {
    console.log(id)
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (id, updatedEntry) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...updatedEntry, id } : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-entry" element={<AddEntry addEntry={addEntry} />} />
          <Route path="/edit-entry/:id" element={<EditEntry entries={entries} editEntry={editEntry} />} />
          <Route path="/view-entries" element={<ViewEntries entries={entries} deleteEntry={deleteEntry} />} />
        </Routes>
    </Router>
  );
}

export default App;
