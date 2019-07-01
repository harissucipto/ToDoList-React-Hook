import React, { useState } from 'react';

const Form = props => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleAdd = e => {
    e.preventDefault();
    props.onAdd(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Todo"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
};

export default Form;
