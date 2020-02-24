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
    const { polygons, latLng, alpha2, isSuccess } = useSelector( state => ({
        polygons: state.mapOptions.polygons,
        isSuccess: state.mapOptions.isSuccess,
        latLng: state.countryList.collection.get(countryCode) && state.countryList.collection.get(countryCode)[countryModel.LAT_LNG],
        alpha2: state.countryList.collection.get(countryCode) && state.countryList.collection.get(countryCode)[countryModel.ALPHA_2_CODE],
    }));
    // console.log(collection.get(countryCode) && collection.get(countryCode)[countryModel.LAT_LNG]);
    useMemo(()=>{
        if(!polygons[alpha2]){
            dispatch(getCountryPolygon({ countryCode: alpha2 }))
        }
    }, [countryCode, polygons, alpha2]);
    return <>{isSuccess ? <GoogleMap latLng={latLng} polygon={polygons[alpha2]}/> : <Loader />}</>
}