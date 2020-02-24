import {actionCreator, getDefaultActionsModel} from "../../services/redux/actionCreator";
import {getPolygonData} from "../../utils";
import {GET_COUNTRY_POLYGON} from "../../constants/actions";
import {POLYGON_API } from '../../constants/api'

export const getCountryPolygon = ({ countryCode }) => actionCreator({
    url: `${POLYGON_API}search.php?q=${countryCode}&polygon_geojson=1&format=json`,
    params: {
        method: 'get'
    },
    extraData: { countryCode },
    responseParser: getPolygonData
}, getDefaultActionsModel(GET_COUNTRY_POLYGON));