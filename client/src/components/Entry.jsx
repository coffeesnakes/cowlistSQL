import React from "react";

const Entry = ({cow}) => {
  console.log('log from entry: ', cow)
  return (
    <li>
      <span> Name: {cow.name}</span>
      <span> Description: {cow.description}</span>
    </li>
  );
};

export default Entry;
