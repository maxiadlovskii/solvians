import {CHANGE_SORT} from '../../constants/actions';
import {countryModel} from "../../constants/models";
import { orders } from '../../constants'
const initState = {
    field: countryModel.NAME,
    direction: orders.ASC
};

export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_SORT:
            return ({
                ...state,
                field: payload.field,
                direction: payload.direction
            });
        default:
            return state
    }
}
