import React from 'react'
import styles from './Details.module.scss'
import {Image} from "../../common/Image/Image";
import classNames from 'classnames'
import { countryModel } from '../../../constants/models'
import {links} from "../../../constants/routerLinks";
import { Link } from 'react-router-dom'
import {Loader} from "../../common/Loader/Loader";
import {Failed} from "../../common/Failed/Failed";
import {CountryMap} from "../../containers/CountryMap/CountryMap";

export const Details = ({ country = {}, isFetching, isFailed }) => {
    const {
        [countryModel.FLAG]: flag,
        [countryModel.BORDERS]: borders,
        [countryModel.LAT_LNG]: latLng,
        ...rest
    } = country;
    return <>
            { isFetching && <Loader /> }
            { isFailed && <Failed/> }
            { <article className={styles.wrapper}>
            {!!Object.entries(country).length && <div className={styles.info}>
            <Image src={flag} width={400}/>
            <div className={styles.table}>
                {
                    Object.entries(rest).map(([key, value]) => (
                        <div className={styles.row} key={key}>
                            <label className={classNames(styles.label, styles.cell)}>{key}</label>
                            <span className={classNames(styles.value, styles.cell)}>{value}</span>
                        </div>
                    ))
                }
                <div className={styles.row}>
                    <label className={classNames(styles.label, styles.cell)}>{countryModel.BORDERS}</label>
                    <span className={classNames(styles.value, styles.cell, styles.borders)}>{
                        borders.map(country => <Link className={styles.link}
                                                     to={`${links.LIST}/${country}`}>{country}</Link>)
                    }</span>
                </div>
            </div>
             </div>
            }
            <div className={styles.map}>
                <CountryMap />
            </div>
        </article>}
    </>
}