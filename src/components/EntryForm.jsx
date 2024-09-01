import React, { useState } from 'react';

function EntryForm({ onSubmit, initialData={} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [location, setLocation] = useState(initialData.location || '');
  const [date, setDate] = useState(initialData.date || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, location, date, description });
    alert("Entry Added successfully")
    setTitle("")
    setLocation("")
    setDate("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Location</label>
        <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-success">Save Entry</button>
    </form>
  );
}

export default EntryForm;
