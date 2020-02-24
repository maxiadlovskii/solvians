import React, {useCallback, useEffect} from 'react';
import { List } from '../../presentational/List/List'
import { useSelector, useDispatch } from 'react-redux'
import { getCountryList } from '../../../redux/actions/countryList'
import { countryList as countryListSelector } from "../../../redux/selectors/countryList";
import { useHistory } from 'react-router-dom'
import {links} from "../../../constants/routerLinks";
export const ListContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isFetching } = useSelector( store => store.countryList);
    const countryList = useSelector( store => countryListSelector(store));
    const onItemClick = useCallback(countryCode=>{
        history.push(`${links.LIST}/${countryCode}`)
    }, [history]);
    useEffect(()=>{
        dispatch(getCountryList());
    }, [dispatch]);
    return <List list={countryList} isFetching={isFetching} onItemClick={onItemClick}/>
}