import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actionCreator'

const initialState = [
  { id: nanoid().substr(0, 3), name: 'Замена стекла', price: 21000 },
  { id: nanoid().substr(0, 3), name: 'Замена дисплея', price: 25000 },
];

export default function serviceList(state = initialState, action) {
  
  switch (action.type) {
    case ADD_SERVICE:
      const item = action.payload;
      if (item.id) {
        const {id, name, price}  = item;
        const newstate = state.filter(service => service.id !== id);
        
        return [...newstate, { id, name, price: Number(price) }];
      } else return [...state, { id: nanoid().substr(0, 3), name: item.name, price: Number(item.price) }];
    case REMOVE_SERVICE:
      let { id } = action.payload;
      return state.filter(service => service.id !== id);

    default:
      return state;
  }
}