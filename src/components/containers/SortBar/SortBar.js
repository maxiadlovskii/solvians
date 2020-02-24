import React, {useCallback} from 'react'
import { SortBar } from '../../presentational/SortBar/SortBar'
import {useDispatch, useSelector} from "react-redux";
import {orders} from "../../../constants";
import { changeSort } from '../../../redux/actions/sort';

export const SortBarContainer = () => {
    const dispatch = useDispatch();
    const { direction, field } = useSelector(store => store.sort);
    const itemOnClick = useCallback(newField=>{
        const fieldChanged = newField !== field;
        const newDirection = fieldChanged || direction === orders.DSC ?  orders.ASC : orders.DSC;
        dispatch(changeSort({
            field: newField,
            direction: newDirection
        }))
    }, [direction, field, dispatch]);
    return <SortBar direction={direction} itemOnClick={itemOnClick} sortedBy={field}/>
};