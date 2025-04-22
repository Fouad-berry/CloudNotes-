import { useState } from 'react';

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
      />
      <textarea
        placeholder="Contenu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%', height: '100px' }}
      />
      <button type="submit">Ajouter la note</button>
    </form>
  );
}
