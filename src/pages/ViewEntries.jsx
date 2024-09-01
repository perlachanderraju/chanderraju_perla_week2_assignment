import React from 'react';
import EntryList from '../components/EntryList';
import Navbar from './Navbar';

function ViewEntries({ entries, deleteEntry }) {
  return (
    <div>
        <Navbar />
        <div className='bottomContainer'>
            <h2 className="mb-4">Your Travel Entries</h2>
            <div className=''>
                <EntryList entries={entries} deleteEntry={deleteEntry} />
            </div>
            
        </div>
    </div>
  );
}

export default ViewEntries;
