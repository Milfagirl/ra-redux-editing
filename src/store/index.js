import { createStore, combineReducers } from 'redux'
import serviceListReducer from '../reducers/serviceList'
import serviceAddReducer from '../reducers/serviceAdd'

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer
})


// store.subscribe(() => console.log(store.getState()))
// store.dispatch(addService('test', 1000))

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store