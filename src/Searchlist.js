import React from 'react';
import { Link } from 'react-router-dom';
import Deleteall from './Deleteall';

export default function Searchlist({ results }) {
  return (
    <div className='search-list'>
      <Deleteall type='temperature'/>
      {results.map(result => (
        <div className='data-preview-small' key={result.pk}>
            <Link to={`/Search/temperature/${result.pk}`}>
            <p>Data Temperature: {result.temperature}</p>
          </Link>
          <hr/>
        </div>
      ))}
    </div>
  );
}

