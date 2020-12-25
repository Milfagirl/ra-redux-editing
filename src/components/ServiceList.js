import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreator';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }
  console.log(items)

  return (
    <ul className = "list-group">
      {items.map(o => (
        <li className = 'list-group-item' key={o.id}>
          {o.name} {o.price}
          <button className = 'btn btn-outline-danger btn-sm' onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList