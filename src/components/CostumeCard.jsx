import React from 'react';
import { Link } from 'react-router-dom';

const CostumeCard = ({ costume: { name } }) => {
  return (
    <Link to={`/${slugifyName(name)}`}>
      <h2>{name}</h2>
    </Link>
  );
};

export default CostumeCard;

function slugifyName(name) {
  return name.replace(' ', '-').toLowerCase();
}
