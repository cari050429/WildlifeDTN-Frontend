import React from 'react';
import { Link } from 'react-router-dom';
import Download from './Download';

export default function Searchlist({ results }) {
  return (
    <div className='search-list'>
    <Download/>
      {results.map(result => (
        <div className='data-preview' key={result.pk}>
            <Link to={`/Search/picture/${result.pk}`}>
            <img src={result.picture} alt='Data' />
          </Link>
        </div>
      ))}
    </div>
  );
}
