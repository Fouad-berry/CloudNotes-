'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';

const API_URL = 'http://localhost:5000/notes';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAdd = async (title, content) => {
    await axios.post(API_URL, { title, content });
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CloudNotes 📝</h1>
      <NoteForm onAdd={handleAdd} />
      <hr />
      <div style={{ marginTop: '2rem' }}>
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
