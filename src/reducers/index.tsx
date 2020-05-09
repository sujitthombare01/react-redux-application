import templatesReducer from './templates/TemplatesReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({ template:templatesReducer })

export default rootReducer;