<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export default function Searchlist({ results }) {
  return (
    <div className='search-list'>
      {results.map(result => (
        <div className='data-preview' key={result.pk}>
            <Link to={`/Search/picture/${result.pk}`}>
            <img src={result.picture} alt='Data Picture' />
          </Link>
        </div>
      ))}
    </div>
  );
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Searchlist({ results }) {
  return (
    <div className='search-list'>
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
>>>>>>> fae61a33499a8f659439907b8c58e088ba31bec1
