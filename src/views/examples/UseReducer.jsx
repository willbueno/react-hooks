import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, allReducer } from '../../store'
import { numberAdd2, numberMultiply7, numberDivide25, parseInt, addNumber, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(allReducer, initialState)
    const [value, setValue] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <SectionTitle title='Exercicio #01' />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuario</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'Chrystian')}>Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                </div>
            </div>

            <SectionTitle title='Desafio' />
            <div className="center">
                <div>
                    <button className="btn"
                        onClick={() => numberMultiply7(dispatch)}>x 7</button>
                    <button className="btn"
                        onClick={() => numberDivide25(dispatch)}>/ 25</button>
                    <button className="btn"
                        onClick={() => parseInt(dispatch)}>Parse Int</button>
                </div>

                <div>
                    <input type="number" className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="btn"
                        onClick={() => addNumber(dispatch, value)}>Add number</button>
                </div>
            </div>
        </div >
    )
}

export default UseReducer