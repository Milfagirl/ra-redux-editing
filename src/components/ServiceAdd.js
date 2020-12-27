import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeServiceField, addService } from '../redux/actionCreator'


export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd) //subscribe
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (item.id) dispatch(addService(item.name, item.price, item.id))
        else dispatch(addService(item.name, item.price))
        dispatch(changeServiceField('name', ''))
        dispatch(changeServiceField('price', ''))
        dispatch(changeServiceField('id', ''))
        dispatch(changeServiceField('editflag', false))
    }

    const handleCancel = (event) => {
        event.preventDefault()
        dispatch(changeServiceField('name', ''))
        dispatch(changeServiceField('price', ''))
        dispatch(changeServiceField('id', ''))
        dispatch(changeServiceField('editflag', false))
    }

    const hocBtnCancel = (Component) => {

        return class extends React.Component {
            render() {
                if (item.editflag) {
                    return (
                        <Component>
                            <button type = 'click' className='btn btn-danger' onClick = {handleCancel}>Cancel</button>
                        </Component>
                    )
                } else return <Component />

            }
        }
    }


    function Form_Service(props) {
        return <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <input type="text" className="form-control" name='name' onChange={handleChange} value={item.name} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name='price' onChange={handleChange} value={item.price} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            {props.children}
        </form>
    }
    
    const WithBtnCancel = hocBtnCancel(Form_Service)
    
    
    return (
        <WithBtnCancel />
    )

}