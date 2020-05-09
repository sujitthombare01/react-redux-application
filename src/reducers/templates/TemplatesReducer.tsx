const initState = { home: 'Home', aboutUs: 'About us', graphs: 'Vega graphs' };

const templatesReducer = (state = { ...initState }, action: any) => {
    switch (action.type) {
        case 'SET_HOME':
            return { ...state, home: action.payload }
        case 'SET_ABOUTUS':
            return { ...state, aboutUs: action.payload }
        case 'SET_GRAPHS':
            return { ...state, graphs: action.payload }
        default:
            return state
    }
}

export default templatesReducer