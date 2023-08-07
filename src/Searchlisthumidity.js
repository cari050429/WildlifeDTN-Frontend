import React from 'react';
import { Link } from 'react-router-dom';
import Download
 from './Download';
export default function Searchlisthumidity({ results }) {
  return (
    <div className='search-list'>
    <Download data={results} />
      {results.map(result => (
        <div className='data-preview-small' key={result.pk}>
            <Link to={`/Search/humidity/${result.pk}`}>
            <p>Data Humidity: {result.humidity}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
