import React, {useEffect} from 'react'
import {Details} from "../../presentational/Detais/Details";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {linkParams} from "../../../constants/routerLinks";
import { getCountry } from "../../../redux/actions/countryList"

export const DetailsContainer = () => {
    const dispatch = useDispatch();
    const { [linkParams.countryCode]: countryCode } = useParams();
    const { isFetching, collection, isFailed } = useSelector( store => store.countryList);
    useEffect(()=>{
        if(!collection.has(countryCode)){
            dispatch(getCountry(countryCode));
        }
    }, [countryCode]);
    return <Details country={collection.get(countryCode)} isFetching={isFetching} isFailed={isFailed}/>
};