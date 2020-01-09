

const anotherName = () => {
    return async (dispatch) => {
        const data = await fetch('http://melodymantra.com/api/partnership')
        const res2 = await (data.json())
        dispatch({ type: 'CHANGE_NAME', payload: res2.data.list })
    }
}

export default anotherName;