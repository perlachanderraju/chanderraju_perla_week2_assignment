import React from 'react';
import EntryForm from '../components/EntryForm';
import Navbar from './Navbar';

function AddEntry({ addEntry }){
  return (
    <div>
        <Navbar />
        <div className='bottomContainer'>
            <h2 className="mb-4">Add a New Entry</h2>
            <EntryForm onSubmit={addEntry} />
        </div>
    </div>
  );
}

export default AddEntry;
