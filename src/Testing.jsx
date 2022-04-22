import React from "react";

export default function Person({ person, onClick, color, index }) {
  return (
    <>
      <h3>My name is {person.person}</h3>
      <h3>My age is {person.age}</h3>
      <button
        style={{ backgroundColor: color }}
        color={color}
        name={person.person}
        onClick={onClick}
        index={index}
      >
        Change color
      </button>
      {index}
    </>
  );
}