import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivide25':
            return { ...state, number: state.number / 25 }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'addNumber':
            return { ...state, number: state.number + parseFloat(action.payload) }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [value, setValue] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <SectionTitle title='Exercicio #01' />
            <div className="center">
                {state.user ?
                    <span className="tex">{state.user.name}</span>
                    : <span className="tex">Sem usuario</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Chrystian' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                </div>
            </div>

            <SectionTitle title='Desafio' />
            <div className="center">
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMultiply7' })}>x 7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDivide25' })}>/ 25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'parseInt' })}>Parse Int</button>
                </div>

                <div>
                    <input type="number" className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="btn"
                        onClick={() => dispatch({ type: 'addNumber', payload: value })}>Add number</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer