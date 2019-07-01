import React, { useState, useEffect } from 'react';

const ListItem = props => {
  const [checked, setChacked] = useState(false);

  useEffect(() => {
    if (checked) {
      const timeoutHandle = setTimeout(props.onDelete, 3000);
      return () => {
        clearTimeout(timeoutHandle);
      };
    }
  }, [checked, props.onDelete]);

  const handleCheckChange = e => setChacked(e.target.checked);

  const style = checked
    ? {
        textDecoration: 'line-through'
      }
    : {};

  return (
    <div className="list__item">
      <input type="checkbox" onChange={handleCheckChange} />
      <span style={style}>{props.text}</span>
    </div>
  );
};

const List = props => {
  return (
    <div className="list">
      {props.items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          onDelete={props.onDelete.bind(null, item.id)}
        />
      ))}
    </div>
  );
};

export default List;
