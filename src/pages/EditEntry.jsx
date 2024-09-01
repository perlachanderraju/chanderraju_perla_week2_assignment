import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EntryForm from '../components/EntryForm';

function EditEntry({ entries, editEntry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = entries.find(entry => entry.id === id);

  const handleSubmit = (updatedEntry) => {
    editEntry(id, updatedEntry);
    navigate('/view-entries');
  };

  return (
    <div className='editContainer'>
      <h2 className="mb-4">Edit Entry</h2>
      <EntryForm onSubmit={handleSubmit} initialData={entry} />
    </div>
  );
}

export default EditEntry;
