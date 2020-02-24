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
    const coordinates = data[0][polygonApi.GEO_JSON][polygonApi.COORDINATES];
    const polygons = data[0][polygonApi.GEO_JSON][polygonApi.TYPE] === 'MultiPolygon' ? coordinates : [coordinates];
    console.log(polygons.length);
    const mappedData = polygons.map( item => {
        console.log(item[0]);
        return item[0].map(([lng, lat]) => ({lat, lng}))});
    console.log(mappedData);
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