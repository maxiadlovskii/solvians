import React from 'react'
import { ListItem } from '../ListItem/ListItem'
import styles from './List.module.scss'
import {countryModel} from "../../../constants/models";
import {SortBarContainer} from "../../containers/SortBar/SortBar";
import {Loader} from "../../common/Loader/Loader";

export const List = ({ list, onItemClick, isFetching }) => {
    return (
    <>
        {
            isFetching ? <Loader /> : <>
                <SortBarContainer />
                <ul className={styles.list}>
                    {
                        list.map(country => <ListItem onClick={onItemClick} key={country[countryModel.ALPHA_3_CODE]} country={country}/>)
                    }
                </ul>
            </>
        }
    </>
)};