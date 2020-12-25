import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeServiceField, addService} from '../actions/actionCreator'


export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd) //subscribe
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addService(item.name, item.price))
        const name = ''
        const value = ''
        dispatch(changeServiceField(name, value))
    }
       
    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <input type="text" className="form-control" name='name' onChange={handleChange} value={item.name} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name='price' onChange={handleChange} value={item.price} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
}