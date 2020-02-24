import React from 'react'
import styles from './SortBar.module.scss'
import {countryModel} from "../../../constants/models";
import { orders } from '../../../constants'
import classNames from 'classnames'
export const SortBar = ({ direction, sortedBy, itemOnClick, sortableFields = [countryModel.NAME, countryModel.POPULATION] }) => (
    <nav className={styles.wrapper}>
        {
            sortableFields.map( field => {
                const isActive = sortedBy === field;
                return (
                <div className={classNames({
                    [styles.isActive]: isActive
                }, styles.sortItem)}
                key={field}
                onClick={() => itemOnClick(field)}
                >
                    <span>{`Sort by ${field}`}</span>
                    {
                        isActive && <span>{(direction === orders.DSC ? '↑' : '↓')}</span>
                    }
                </div>
            )})
        }
    </nav>
);