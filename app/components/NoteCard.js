export default function NoteCard({ note, onDelete }) {
    return (
      <div style={{ border: '1px solid gray', padding: '1rem', marginBottom: '1rem' }}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={() => onDelete(note.id)}>Supprimer</button>
      </div>
    );
  }
  