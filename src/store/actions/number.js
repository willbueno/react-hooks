export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' })
}

export function numberMultiply7(dispatch) {
    dispatch({ type: 'numberMultiply7' })
}

export function numberDivide25(dispatch) {
    dispatch({ type: 'numberDivide25' })
}

export function parseInt(dispatch) {
    dispatch({ type: 'parseInt' })
}

export function addNumber(dispatch, value) {
    dispatch({ type: 'addNumber', payload: value })
}