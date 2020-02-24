import {FAILED, GET_COUNTRY_POLYGON, REQUEST, SUCCESS} from '../../constants/actions';
const initState = {
    polygons: {},
    isFetching: false,
    isFailed: false,
    isSuccess: false
};

export default (state = initState, action) => {
    const { type, payload, extraData } = action;
    switch (type) {
        case `${GET_COUNTRY_POLYGON}${REQUEST}`:
            return ({
                ...state,
                isFetching: true,
                isFailed: false,
                isSuccess: false,
                errors: null,
            });
        case `${GET_COUNTRY_POLYGON}${SUCCESS}`:
            return {
                ...state,
                polygons: {
                    ...state.polygons,
                    [extraData.countryCode]: payload
                },
                isFetching: false,
                isSuccess: true
            };
        case `${GET_COUNTRY_POLYGON}${FAILED}`:
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
