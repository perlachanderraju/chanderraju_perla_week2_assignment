import React from 'react';
import { Link } from 'react-router-dom';

function EntryList({ entries, deleteEntry }) {
  if (entries.length === 0) {
    return <p>No entries found.</p>;
  }

  return (
    <ul className=" viewContainer list-group">
      {entries.map((entry, id) => (
        <li key={id} className="list-group-item m-3">
          <h5>{entry.title}</h5>
          <p>{entry.location} - {entry.date}</p>
          <p>{entry.description}</p>
          <div className='container'>
            <button className="btn btn-danger me-2" onClick={() => deleteEntry(entry.id)}>Delete</button>
            <Link to={`/edit-entry/${entry.id}`} className="btn btn-warning">Edit</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EntryList;
