import { GET_COUNTRY_LIST, GET_COUNTRY } from '../../constants/actions';
import { actionCreator, getDefaultActionsModel, getActionsModelWithSameRequestAndFailure } from '../../services/redux/actionCreator';
import {MAIN_END_POINT} from "../../constants/api";
import { countryModel } from '../../constants/models'
import {normalizeCountryData} from "../../utils";

const urlForAll = `${MAIN_END_POINT}all`;
const urlByCode = `${MAIN_END_POINT}alpha`;
export const getCountryList = () => actionCreator({
    url: urlForAll,
    params: {
        method: 'get',
        query: {
            fields: `${Object.values(countryModel).join(';')}`
        }
    },
    responseParser: normalizeCountryData
}, getDefaultActionsModel(GET_COUNTRY_LIST));

export const getCountry = countryCode => actionCreator({
    url: `${urlByCode}/${countryCode.toLowerCase()}`,
    params: {
        method: 'get',
        query: {
            fields: `${Object.values(countryModel).join(';')}`
        }
    },
    responseParser: normalizeCountryData
}, getActionsModelWithSameRequestAndFailure(GET_COUNTRY, GET_COUNTRY_LIST));
