import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
    const n = parseInt(number)

    if (n < 0) {
        return -1
    }

    if (n === 0) {
        return 1
    }

    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [status, setStatus] = useState("Impar")

    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function () {
        if (factorial > 1000000) {
            document.title = 'Eita!!!'
        }
    }, [number])

    useEffect(function () {
        setStatus(number % 2 === 0 ? 'Par' : 'Impar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicio # 01" />

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? 'Nao existe' : factorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio # 02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect