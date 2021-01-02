import React from 'react';
import Entry from './Entry.jsx';

const List = ({cows}) => {
  return (
    <ul className="cows">

      {cows.map((cow) => (

      < Entry key={cow.id} cow={cow} />

      ))}

    </ul>
  )
};

export default List;
