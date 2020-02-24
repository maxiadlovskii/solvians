import React, {useMemo} from 'react';
import { useParams } from 'react-router-dom'
import { GoogleMap } from '../../common/GoogleMap';
import { getCountryPolygon } from '../../../redux/actions/mapOptions'
import {useDispatch, useSelector} from "react-redux";
import {linkParams} from "../../../constants/routerLinks";
import {countryModel} from "../../../constants/models";
import {Loader} from "../../common/Loader/Loader";

export const CountryMap = () => {
    const dispatch = useDispatch();
    const { [linkParams.countryCode]: countryCode } = useParams();
    const { polygons, latLng, isSuccess, name } = useSelector( state => ({
        polygons: state.mapOptions.polygons,
        isSuccess: state.mapOptions.isSuccess,
        latLng: state.countryList.collection.get(countryCode) && state.countryList.collection.get(countryCode)[countryModel.LAT_LNG],
        name: state.countryList.collection.get(countryCode) && state.countryList.collection.get(countryCode)[countryModel.NAME],
    }));
    useMemo(()=>{
        if(!polygons[countryCode] && name){
            dispatch(getCountryPolygon({ countryCode, name }))
        }
    }, [countryCode, polygons, name, dispatch]);
    return <>{isSuccess ? <GoogleMap latLng={latLng} polygon={polygons[countryCode]}/> : <Loader />}</>
}