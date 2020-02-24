import { createSelector } from 'reselect'
import { compareValues } from '../../utils'
const direction = state => state.sort.direction;
const field = state => state.sort.field;
const collection = state => state.countryList.collection;

export const countryList = createSelector(
    direction,
    field,
    collection,
    (direction, field, collection) => {
        const countries = Array.from(collection.values());
        return countries.sort(compareValues(field, direction))
    }
);