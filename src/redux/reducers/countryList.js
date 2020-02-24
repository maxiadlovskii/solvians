import {GET_COUNTRY_LIST, GET_COUNTRY, SUCCESS, FAILED, REQUEST} from '../../constants/actions';
const initState = {
    errors: null,
    collection: new Map([]),
    isFetching: false,
    isFailed: false,
    isSuccess: false
}

export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case `${GET_COUNTRY_LIST}${REQUEST}`:
            return ({
                ...state,
                isFetching: true,
                isFailed: false,
                isSuccess: false,
                errors: null,
            });
        case `${GET_COUNTRY_LIST}${SUCCESS}`:
            return {
                ...state,
                collection: payload,
                isFetching: false,
                isSuccess: true
            };
        case `${GET_COUNTRY}${SUCCESS}`:
            return {
                ...state,
                collection: new Map([...state.collection, ...payload]),
                isFetching: false,
                isSuccess: true
            };
        case `${GET_COUNTRY_LIST}${FAILED}`:
            return {
                ...state,
                isFetching: false,
                isFailed: true,
                errors: payload
            };
        default:
            return state
    }
}
