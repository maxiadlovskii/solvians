import {countryModel, polygonApi} from "../constants/models";
import { orders } from "../constants"
export const normalizeCountryData = (data = [], key=countryModel.ALPHA_3_CODE) => {
    const toMap = Array.isArray(data) ? data : [data];
    return toMap.reduce((res, cur)=>{
        res.set(cur[key], cur);
        return res;
    }, new Map([]))
};
export const getPolygonData = data => {
    const geoJSON = data.find( item => ['MultiPolygon', 'Polygon'].includes(item[polygonApi.GEO_JSON][polygonApi.TYPE]))[polygonApi.GEO_JSON];
    const coordinates = geoJSON[polygonApi.COORDINATES];
    const polygons = geoJSON[polygonApi.TYPE] === 'MultiPolygon' ? coordinates : [coordinates];
    const mappedData = polygons.map( item => {
        return item[0].map(([lng, lat]) => ({lat, lng}))});
    return mappedData
};

export const compareValues = (key, order = orders.ASC) => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === orders.DSC) ? (comparison * -1) : comparison
        );
    };
}