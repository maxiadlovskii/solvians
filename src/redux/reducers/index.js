import { combineReducers } from 'redux'
import countryList from './countryList'
import sort from './sort'
import mapOptions from './mapOptions'
export default combineReducers({
    countryList,
    sort,
    mapOptions
})
